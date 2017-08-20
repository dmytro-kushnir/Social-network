<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $filename = $_FILES['file']['name'];
  $meta = $_POST;
  $destination = $meta['dataArr']['post_image'] . $filename;
  $data = $meta['dataArr'];
  
  $data['post_image'] = $destination;

  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

  $insertId = $Db->addSql('post', $data); // add post to SQL
 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);