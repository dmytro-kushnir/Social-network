<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);
$post_text = $data["post_text"];
$id = $data["id"];
$id_owner = $data["id_owner"];

$Db->updateSqlPrepared("UPDATE post SET post_text = '$post_text'  WHERE id = '$id'" ); // update likes

/// there  should be also IMAGE!

$result = [
    'info' => $post_text,
    'errors' => []
  ];

header('Content-Type: application/json');
echo json_encode($result);
