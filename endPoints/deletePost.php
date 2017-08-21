<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);
// input -> 
// $data["id_owner"];
// $data["id_post"];

// $insertId = $Db->selectSqlPrepared("DELETE * FROM post WHERE  id_post = '$data[id_post]' AND id_owner = '$data[id_owner]'");
$insertId = $Db->deleteSql('post', $data); // add post to SQL
  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);