

<?php
require 'ConexaoService.php';

class ClientesService extends db {

    public static function  showCustomers() {
        $mysql = new db();
        $sql = "SELECT * FROM tab_clientes";
        $res = $mysql->select( $sql );
        print_r(json_encode($res)); 
    }

    public static function  saveCustomers($id, $nome, $cpf, $email) {

        if (!empty($id)) {
            $mysql = new db();
            $sql = "UPDATE tab_clientes SET nome ='$nome' , cpf=  '$cpf' , email = '$email' WHERE id = $id  ";
            $mysql->update( $sql );
        } else {
        $mysql = new db();
        $sql = "INSERT INTO tab_clientes (nome, cpf, email) values('$nome', '$cpf', '$email')  ";
        $mysql->insert( $sql );
        }
    }

    public static function  deleteCustomers($id) {
        $mysql = new db();
        $sql = "DELETE FROM tab_clientes WHERE id = $id ";
        $mysql->delete( $sql );
    }

}
?>