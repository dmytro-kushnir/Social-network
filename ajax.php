<?php
    include ('Config/config.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);
    ///////
    $users = $data["users"];
    $data_users = $data["data_users"];
    ///////
    $select = "SELECT count(*) as counter FROM users WHERE userEmail='$users[userEmail]'";
    $query = $Db->query($select);
    $query->execute();
    $num = $query->fetchAll(PDO::FETCH_ASSOC);

    $insertId = null;
    if (!empty($data)) {
        if($num[0]['counter'] > 0){
            $success = false;
            $userInfo = "Користувач з таким емейлом вже існує";
        }else {
           $insertId = $Db->addSql('users', $users); // add to users
           $data_users["userId"] = $insertId; // update field in users_data id
           $insertUserId = $Db->addSql('users_data', $data_users); // add to users_data
            if($insertId){
                mkdir("src/img/users/user".$insertId, 0700);
                mkdir("src/img/users/user".$insertId."/avatars", 0700);
                mkdir("src/img/users/user".$insertId."/backgrounds", 0700);
                mkdir("src/img/users/user".$insertId."/chat", 0700);
                mkdir("src/img/users/user".$insertId."/friends", 0700);
                mkdir("src/img/users/user".$insertId."/gallery", 0700);
                mkdir("src/img/users/user".$insertId."/posts", 0700);
                $success = true;
               $userInfo = "Ви зареєстровані";
            }   
           else{
            $success = false;
               $userInfo = "Помилка";
           }
        }
    } 
    $result = [
        'success' =>  $success,        
        'id' => $insertId,
        'userInfo' => $userInfo,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
