

let paginationInicial = sessionStorage.getItem("paginationInicial") || 0
let paginationFinal = sessionStorage.getItem("paginationFinal") || 6

const ObjectCustomers = async () => {

  const customers = new ClientesService();

  const clientesRow = await customers.showCustomers()

  return clientesRow

}


ObjectCustomers()
  .then((customers) => {

    const responseCustomers = JSON.parse(customers)

    const HtmlOptions = responseCustomers.map((customer) => {

      return ` <option id="selected-${customer.id}"  value="${customer.id}">${customer.id} - ${customer.nome}</option>`

    })


    const HtmlTable = responseCustomers.map((customer, indice) => {

      if (indice < paginationFinal && indice >= paginationInicial) {
        return `<tr id="dataTr">
                   <td width="2%" id="selectedId">${customer.id}</td>
                   <td width="15%" >${customer.nome}</td>
                   <td width="15%" >${customer.cpf}</td>
                   <td width="15%" >${customer.email}</td>
                   <td width="5%" ><div onclick="confirmDelete(${customer.id})" class="ui button red" tabindex="0"><i class="trash alternate icon"></i> Excluir</div></td>
                   <td width="5%" ><div onclick="editModalCustomers(${customer.id},'${customer.nome}','${customer.cpf}','${customer.email}')" class="ui button " tabindex="0"><i class="edit icon"></i> Editar</div></td>
                   </tr>`
      }

    })

    let countPagination = 1

    const HtmlPagination = responseCustomers.map((customer, indice) => {

      if (indice < customer.total / 6) {

        const page = countPagination++

        return `<a onclick="paginationList(${page})" class="item">${page}</a>`
      }

    })

    $('.select').html(HtmlOptions)
    $('.cutomers').html(HtmlTable)
    $('.pagination').html(HtmlPagination)

  })

const paginationList = (page) => {

  switch (page) {
    case 1:
      sessionStorage.setItem("paginationInicial", 0)
      sessionStorage.setItem("paginationFinal", 6)
      break;
    case 2:
      sessionStorage.setItem("paginationInicial", 6)
      sessionStorage.setItem("paginationFinal", 12)
      break;
    case 3:
      sessionStorage.setItem("paginationInicial", 12)
      sessionStorage.setItem("paginationFinal", 18)
      break;
    case 4:
      sessionStorage.setItem("paginationInicial", 18)
      sessionStorage.setItem("paginationFinal", 24)
      break;
    case 5:
      sessionStorage.setItem("paginationInicial", 24)
      sessionStorage.setItem("paginationFinal", 30)
      break;
    case 6:
      sessionStorage.setItem("paginationInicial", 30)
      sessionStorage.setItem("paginationFinal", 36)
      break;
    case 7:
      sessionStorage.setItem("paginationInicial", 36)
      sessionStorage.setItem("paginationFinal", 42)
      break;
    default:
      sessionStorage.setItem("paginationInicial", 42)
      sessionStorage.setItem("paginationFinal", 48)
  }

  window.location.reload(true);
}

const openModalCustomers = () => {

  $('#modalInserCostumer').modal({
    escapeClose: false,
    clickClose: false,
    showClose: true
  })

}

const editModalCustomers = (id, nome, cpf, email) => {

  $('#modalInserCostumer').modal({
    escapeClose: false,
    clickClose: false,
    showClose: true
  })
  $('#id').val(id)
  $('#nome').val(nome)
  $('#cpf').val(cpf)
  $('#email').val(email)

}

const saveCustomers = async () => {

  const nome = $('#nome').val()
  const cpf = $('#cpf').val()
  const email = $('#email').val()
  const id = $('#id').val()

  if (nome !== '' && cpf !== '' && email !== '') {

    const customers = new ClientesService();

    await customers.saveCustomers(id, nome, cpf, email)

    window.location.reload(true);

  }

}

const deleteCustomers = async () => {

  id = $('#id_delete').val()

  const customers = new ClientesService();

  await customers.deleteCustomers(id)

  window.location.reload(true);

}

const confirmDelete = async (id) => {

  $('#id_delete').val(id)

  $('#modalDelete').modal({
    escapeClose: false,
    clickClose: false,
    showClose: true
  })
}

$(document).change('#select', function () {
  const nameFilter = $('#select').val().toLowerCase()

  $('.cutomers').find('tr').each(function () {
    const textFilter = $(this).find('#selectedId').text()
    const viewFilter = textFilter.toLowerCase().indexOf(nameFilter) >= 0

    $(this).closest('#dataTr').css('display', viewFilter ? 'table-row' : 'none')

  })
})