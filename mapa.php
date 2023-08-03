

<?php
require 'Services/ClientesService.php';

if ($_REQUEST['rota'] == 'clientes') {
   return ClientesService::showCustomers();
}

if ($_REQUEST['rota'] == 'saveCustomers') {
   print_r($_REQUEST['id']);
   ClientesService::saveCustomers($_REQUEST['id'], $_REQUEST['nome'], $_REQUEST['cpf'], $_REQUEST['email']);
}

if ($_REQUEST['rota'] == 'deleteCustomers') {

   ClientesService::deleteCustomers($_REQUEST['id']);
}
