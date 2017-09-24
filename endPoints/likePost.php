<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);
$likes = $data["likes"];
 $id = $data["id"];
$id_owner = $data["id_owner"];

$tryToTakeData = $Db->selectSqlPrepared("SELECT * FROM users_likes  WHERE
           user_id = '$id_owner' AND obj_id = '$id' "); // search cols in table

if(empty($tryToTakeData)){ // if we not found any needed cols
  $likes +=1;
  $inner_join = array(
    "user_id"=>$id_owner,
    "obj_id"=>$id
  );
  $insertId = $Db->addSql('users_likes', $inner_join); // add them!
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
