<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $data = json_decode(file_get_contents('php://input'), true);

  $data_arr = $Db->selectSqlPrepared("SELECT * FROM users_data WHERE id = 1 ");

  $friendsIdArr = explode(",",$data_arr[0]["friends"]); // convert friends string to array
  $friends = array();
  
  // select all friends general data 
  foreach($friendsIdArr as $value){
    $buf = $Db->selectSqlPrepared("SELECT id, first_name, second_name, count_friends, avatar_url FROM users_data WHERE id = '$value'");
    $friends[] = $buf[0];
  }
  $data_arr[0]["friends"] = $friends; // sets friends to data_arr instead of friends string

 
$avatars = $Db->selectSqlPrepared("SELECT 
    avatars.sender_name, avatars.sender_url, avatars.avatar_url, avatars.reciever_url, avatars.avatar_date, avatars.likes 
      FROM avatars INNER JOIN users_data ON users_data.id=avatars.id");
$data_arr[0]["avatars"] = $avatars;

 $result = [
        'success' => true,
        'info' => $data_arr[0],
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);