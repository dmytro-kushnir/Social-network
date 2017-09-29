<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);
$likes = $data["likes"];
 $id = $data["id"];
$id_owner = $data["id_owner"];

$tryToTakeData = $Db->selectSqlPrepared("SELECT * FROM post_likes  WHERE
           id_owner = '$id_owner' AND id = '$id' "); // search cols in table

if(empty($tryToTakeData)){ // if we not found any needed cols
  $likes +=1;
  $inner_join = array(
    "id"=>$id,
    "id_owner"=>$id_owner
  );
  $insertId = $Db->addSql('post_likes', $inner_join); // add them!
  $Db->updateSqlPrepared("UPDATE post SET post_likes = '$likes'  WHERE id = '$id'" ); // update likes
 
}
else{
  $likes = null;
}
$result = [
    'info' => $likes,
    'errors' => []
  ];

header('Content-Type: application/json');
echo json_encode($result);
