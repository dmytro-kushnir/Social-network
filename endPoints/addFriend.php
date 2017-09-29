<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);

$targetId = $data['targetId'];
$logginedId = $data['logginedId'];

$select = $Db->selectSqlPrepared("SELECT * FROM users_data WHERE userId = $logginedId");

$getFriend = $select[0];
$geetFriend = $getFriend['friends'].$targetId.",";


$newFriend['first_name'] = $getFriend['first_name'];
$newFriend['second_name'] = $getFriend['second_name'];
$newFriend['userId'] = $getFriend['userId'];
$newFriend['birthday'] = $getFriend['birthday'];
$newFriend['city'] = $getFriend['city'];
$newFriend['education'] = $getFriend['education'];
$newFriend['mobile_number'] = $getFriend['mobile_number'];
$newFriend['count_friends'] = $getFriend['count_friends'];
$newFriend['background_url'] = $getFriend['background_url'];
$newFriend['avatar_url'] = $getFriend['avatar_url'];
$newFriend['friends'] = $geetFriend;
$newFriend['avatars'] = $getFriend['avatars'];
$newFriend['gallery'] = $getFriend['gallery'];
$newFriend['posts'] = $getFriend['posts'];
$newFriend['chat'] = $getFriend['chat'];



$addNewFriend = $Db->updateSql('users_data', $newFriend, "userId=".$logginedId);

$result = [
    'addNewFriend' => $addNewFriend,
    'errors' => []
  ];
  
  header('Content-Type: application/json');
  echo json_encode($result);
?>