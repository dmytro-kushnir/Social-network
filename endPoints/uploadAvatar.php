<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $filename = $_FILES['file']['name'];
  $meta = $_POST;
  $destination = $meta['dataArr']['image_url'] . $filename;
  $data = $meta['dataArr'];
  $data['image_url'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

  $dataAvatar['avatar_url'] = $data['image_url'];
  
  //  $insertId = $Db->updateSql('users_data', $dataAvatar, $data['id_owner']); // update current user avatar
  
   $insertId = $Db->addSql('avatars', $data); // add avatar to SQL
 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);