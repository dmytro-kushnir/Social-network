<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);

// $data[1]["dbName"] could be -> avatars || gallery
$dbName = $data[1]["dbName"];
$dbNameSelector = $dbName . ".image_url";
$id = $data[0]["id"];

$image_url = $Db->selectSqlPrepared("SELECT $dbNameSelector FROM $dbName  WHERE id = $id"); // get image_url drom DB
if(file_exists($image_url[0]["image_url"])){
unlink($image_url[0]["image_url"]); // delete image from folder
}
$insertId = $Db->deleteSql($dbName, $data[0]);
if($data[1]["dbName"] == "avatars" && $data[1]["is_set"] == 1){ // if it's setted avatar 
  $dataAvatar['avatar_url'] = "../src/img/users/noUser/avatars/avatar.jpg";
 $insertId = $Db->updateSql('users_data', $dataAvatar , "id = " . $data[0]["id_owner"]); // make it default
}
$result = [
    'info' => $data,
    'errors' => []
  ];

header('Content-Type: application/json');
echo json_encode($result);
