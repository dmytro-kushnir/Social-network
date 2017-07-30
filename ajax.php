<?php

    include ('Config/config.php');
    $Db = new \Db\Db();
    $temp = array_keys($_POST);
    $data = json_decode($temp[0], true);

    $select = "SELECT count(*) as counter FROM users WHERE userEmail='$data[userEmail]'";
    $query = $Db->query($select);
    $query->execute();
    $num = $query->fetchAll(PDO::FETCH_ASSOC);

    $insertId = null;
    
    if (!empty($data)) {
        if($num['counter'] > 0){
            $userInfo = "Користувач з таким емейлом вже існує";
        }
       else {
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
        'type' => 'succes',
        'insertId' => $insertId,
        'userInfo' => $userInfo,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
