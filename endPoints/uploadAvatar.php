<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $filename = $_FILES['file']['name'];
  $meta = $_POST;
  $destination = $meta['dataArr']['image_url'] . $filename;
  $data = $meta['dataArr'];
  $data['image_url'] = $destination;
  $data['sender_url'] = $destination;
  $data['reciever_url'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

  $dataAvatar['avatar_url'] = $data['image_url'];

  $dataIsSet['is_set'] = 0;
  
   $insertId = $Db->updateSql('users_data', $dataAvatar, "id = " . $data['id_owner']); // update current user avatar

   $insertId = $Db->updateSql('avatars', $dataIsSet, "id_owner = " . $data['id_owner']); // NULL all isset before change avatar

   $insertId = $Db->addSql('avatars', $data); // add avatar with "is_set" : 1
 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);