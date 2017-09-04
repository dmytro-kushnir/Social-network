<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);

// $data[1]["dbName"] could be -> avatars || gallery

$insertId = $Db->deleteSql($data[1]["dbName"], $data[0]);


if($data[1]["dbName"] == "avatars" && $data[1]["is_set"] == 1){
  $dataAvatar['avatar_url'] = "../src/img/users/noUser/avatars/avatar.jpg";
  
$insertId = $Db->updateSql('users_data', $dataAvatar , "id = " . $data[0]["id_owner"]);
}
$result = [
    'info' => $data,
    'errors' => []
  ];

header('Content-Type: application/json');
echo json_encode($result);
