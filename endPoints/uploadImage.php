<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

if($_FILES){ // it's files and text
  $filename = $_FILES['file']['name'];
  $meta = $_POST;
  $destination = $meta['dataArr']['image_url'] . $filename;
  $data = $meta['dataArr'];
  $data['image_url'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
}
  else{ // it's only text
    $data = json_decode(file_get_contents('php://input'), true);
  }

  $insertId = $Db->addSql('gallery', $data); // add post to SQL
 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);