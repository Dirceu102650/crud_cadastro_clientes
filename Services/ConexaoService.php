<?php
require '../lib/conexao.php' ;

class db {

    public  function select($sql) {
        $conexao = conexao::getInstance();
        $stm = $conexao->prepare($sql);
        $stm->execute();
        $returnData = $stm->fetchAll(PDO::FETCH_OBJ);
        return json_encode($returnData);

    }

    public  function insert($sql) {
        $conexao = conexao::getInstance();
        $stm = $conexao->prepare($sql);
        $stm->execute();
        $stm->fetchAll(PDO::FETCH_OBJ);

    }

    public  function update($sql) {
        $conexao = conexao::getInstance();
        $stm = $conexao->prepare($sql);
        $stm->execute();
        $stm->fetchAll(PDO::FETCH_OBJ);

    }

    public  function delete($sql) {
        $conexao = conexao::getInstance();
        $stm = $conexao->prepare($sql);
        $stm->execute();
        $stm->fetchAll(PDO::FETCH_OBJ);

    }
}
