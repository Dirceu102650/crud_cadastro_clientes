class ClientesService {

   async showCustomers() {

      const res = await $.ajax({
         method: 'get',
         url: "http://localhost:8080/crud_cadastro_clientes/mapa.php",
         data: { rota: 'clientes' }
      }).then(function (data) {
         return JSON.parse(data)
      })

      return res

   }

   async saveCustomers(id, nome, cpf, email) {

      await $.ajax({
         method: 'get',
         url: "http://localhost:8080/crud_cadastro_clientes/mapa.php",
         data: { rota: 'saveCustomers', id: id, nome: nome, cpf: cpf, email: email }
      })

   }

   async deleteCustomers(id) {

      await $.ajax({
         method: 'get',
         url: "http://localhost:8080/crud_cadastro_clientes/mapa.php",
         data: { rota: 'deleteCustomers', id: id }
      })

   }

}





