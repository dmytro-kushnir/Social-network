<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $filename = $_FILES['file']['name'];
  
  $meta = $_POST;
  $destination = $meta['dataArr']['background_url'] . $filename;
  $data = $meta['dataArr'];
  $data['background_url'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
  
  $dataBg['background_url'] = $data['background_url'];
 
  $insertId = $Db->updateSql('users_data', $dataBg, $data['id']);

 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);