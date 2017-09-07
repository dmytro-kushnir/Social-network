<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$data = json_decode(file_get_contents('php://input'), true);

  $url['avatar_url'] = $data['url'];
  $user_id['id'] = $data['user_id'];
  $insertId = $Db->updateSql('users_data', $url, "id = " . $user_id['id']); // update current user avatar

  /////////

  $page_name = $data['pageName'];

 
    $dataIsSet['is_set'] = 0;
    $insertId = $Db->updateSql('avatars', $dataIsSet, "id_owner = " . $user_id['id']); // NULL all isset before update avatar
  if($page_name == 'avatars'){
    $dataIsSet['is_set'] = 1;
    $image_id['id'] = $data['image_id'];
    $insertId = $Db->updateSql('avatars', $dataIsSet, "id = " . $image_id['id']); // asing is_set to updated image("1")
  }
  else if($page_name == 'gallery'){
     $insertId = $Db->addSql('avatars', $data["newAvatar"]); // add avatar with "is_set" : 1
  }
  
  
  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);