<?php
require 'ClientesService.php';

class ClientesController extends ClientesService {

    function customers() {
        $customers = ClientesService::showCustomers();
        return $customers;
    }

}


?>