
const ObjectCustomers = async  ()=>{

const customers = new ClientesService();

const clientesRow =  await customers.showCustomers()

return clientesRow

}

const   filterCustomer = ()=> {
    
  const selectValue = $('#select').val()

  console.log('Dirceu T', selectValue)
}

ObjectCustomers()
.then((customers) => {

    const responseCustomers = JSON.parse(customers)

    const HtmlOptions = responseCustomers.map((customer)=>{

    return ` <option id="selected-${customer.id}"  value="${customer.id}">${customer.id} - ${customer.nome}</option>`

    })

    const HtmlTable = responseCustomers.map((customer)=>{

        return `<tr id="dataTr">
                   <td width="2%" id="selectedId">${customer.id}</td>
                   <td width="15%" >${customer.nome}</td>
                   <td width="15%" >${customer.cpf}</td>
                   <td width="15%" >${customer.email}</td>
                   <td width="5%" ><div onclick="confirmDelete(${customer.id})" class="ui button red" tabindex="0"><i class="trash alternate icon"></i> Excluir</div></td>
                   <td width="5%" ><div onclick="editModalCustomers(${customer.id},'${customer.nome}','${customer.cpf}','${customer.email}')" class="ui button " tabindex="0"><i class="edit icon"></i> Editar</div></td>
                   </tr>`
    
    })
    
  $('.select').html(HtmlOptions)
  $('.cutomers').html(HtmlTable)
  
})

const openModalCustomers = ()=>{

  $('#modalInserCostumer').modal({
    escapeClose: false,
    clickClose: false,
    showClose: true
  })

}

const editModalCustomers = (id, nome, cpf, email)=>{

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

const saveCustomers = async ()=>{

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

const deleteCustomers = async ()=>{

  id = $('#id_delete').val()

const customers = new ClientesService();

 await customers.deleteCustomers(id)

 window.location.reload(true);

}

const confirmDelete = async (id)=>{

$('#id_delete').val(id)

$('#modalDelete').modal({
  escapeClose: false,
  clickClose: false,
  showClose: true
})
}

$(document).change('#select', function() {
  const nameFilter = $('#select').val().toLowerCase()
 
  $('.cutomers').find('tr').each(function() {     
    const textFilter = $(this).find('#selectedId').text()
    const viewFilter = textFilter.toLowerCase().indexOf(nameFilter) >= 0

  $(this).closest('#dataTr').css('display', viewFilter ? 'table-row' : 'none')

  }) 
})