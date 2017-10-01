<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);
$likes = $data["likes"];
 $id = $data["id"];
 $like_table = $data["like_table"];
 $target_table = $data["target_table"];
$id_owner = $data["id_owner"];
$isLiked = false;

$tryToTakeData = $Db->selectSqlPrepared("SELECT * FROM $like_table  WHERE
           id_owner = '$id_owner' AND id = '$id' "); // search cols in table
           
 $inner_join = array( // data to add to post_lies table
  "id"=>$id,
  "id_owner"=>$id_owner
);

if(empty($tryToTakeData)){ // if we not found any needed cols (we don't liked this post yet)
 
  $insertId = $Db->addSql($like_table, $inner_join); // add them!
  $likes += 1;
  $Db->updateSqlPrepared("UPDATE $target_table SET likes = '$likes'  WHERE id = '$id'" ); // like
  $isLiked = true;
}
else{ // if we want to unlike post
  $insertId = $Db->deleteSql($like_table, $inner_join); // delete from table 'post_likes'
  $likes -= 1;
  $Db->updateSqlPrepared("UPDATE $target_table SET likes = '$likes'  WHERE id = '$id'" ); // unlike
  $isLiked = false;
}
$result = [
    'isLiked' => $isLiked,
    'errors' => []
  ];

header('Content-Type: application/json');
echo json_encode($result);
