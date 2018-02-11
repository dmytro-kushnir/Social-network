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
  $bgUderId = $Db->decryptText($meta['dataArr']['id']);
  $destination = $meta['dataArr']['background_url'] . $bgUderId . "/backgrounds/" . $filename;
  $data = $meta['dataArr'];
  $data['background_url'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
  
  $dataBg['background_url'] = $data['background_url'];
 
  $insertId = $Db->updateSql('users_data', $dataBg, "id = " . $bgUderId); // UPDATE
  

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);