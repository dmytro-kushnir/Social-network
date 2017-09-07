<?php

    include ('Config/config.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);

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
           
           $addUserId = $Db->selectSqlPrepared("SELECT userId FROM users WHERE userEmail='$data[userEmail]'");
           $dataUsers = "INSERT INTO users_data (first_name, second_name, userId, background_url, avatar_url) 
           VALUES ('$data[userFirstName]', '$data[userSecondName]', '$addUserId[0]', '/src/default_bg.jpg','/src/default_avatar.png')";
            $addDataUsers = $Db->query($dataUsers);
            $addDataUsers->execute();
           
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
        'dataUsers' => $dataUsers,
        'insertId' => $insertId,
        'userInfo' => $userInfo,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
