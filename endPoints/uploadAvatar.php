<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

function random_string($length) {
  $key = '';
  $keys = array_merge(range(0, 9), range('a', 'z'));

  for ($i = 0; $i < $length; $i++)
  {
      $key .= $keys[array_rand($keys)];
  }

  return $key;
}

  $filename = $_FILES['file']['name'];

  $path_parts = pathinfo($filename);
  
  $filename = random_string(15) .'.'.$path_parts['extension'];

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