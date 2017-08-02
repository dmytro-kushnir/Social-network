<?php

    include ('Config/config.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);
    $hey = "hello";

    // test manual data
    // $array = array(
    // 'userFirstName' => 'test',
    // 'userSecondName' => 'test',
    // 'userEmail' => 'test@test',
    // 'userPassword' => 'test');

    $select = "SELECT count(*) as counter FROM users WHERE userEmail='$data[userEmail]'";
    $query = $Db->query($select);
    $query->execute();
    $num = $query->fetchAll(PDO::FETCH_ASSOC);

    $insertId = null;
    if (!empty($data)) {
        if($num[0]['counter'] > 0){
            $userInfo = "Користувач з таким емейлом вже існує";
        }else {
           $insertId = $Db->addSql('users', $data);
           
           if($insertId){
               $userInfo = "Ви зареєстровані";
           }
           else{
               $userInfo = "Помилка";
           }
        }
    } 
    $result = [
        'type' => 'success',
        'insertId' => $insertId,
        'userInfo' => $userInfo,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
