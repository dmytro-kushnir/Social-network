<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

if($_FILES){ // it's files and text
  $filename = $_FILES['file']['name'];
  
  $meta = $_POST;
  if($filename !== null)
  $destination = $meta['dataArr']['post_image'] . $filename;
  else 
  $destination = "";
  $data = $meta['dataArr'];
  $data['post_image'] = $destination;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
}
  else{ // it's only text
    $data = json_decode(file_get_contents('php://input'), true);
    $data["post_image"] = "";
  }

  $insertId = $Db->addSql('post', $data); // add post to SQL
 

  $result = [
    'info' => $data,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);