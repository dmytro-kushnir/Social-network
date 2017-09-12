<?php
    include ('../Config/config.php');
    include ('../Db/Db.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);
    
    $select = $Db->selectSqlPrepared("SELECT first_name, second_name, birthday, city, education, mobile_number FROM users_data WHERE userId = '$data'");
    $email = $Db->selectSqlPrepared("SELECT userEmail FROM users WHERE userId = '$data'");
    $result = [
        'info' => $select,
        'infoEmail' => $email,
        'errors' => []
      ];
      
      header('Content-Type: application/json');
      echo json_encode($result);
?>