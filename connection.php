<?php 
include ('Config/config.php');
$Db = new \Db\Db();

$json = file_get_contents('./app/jsons/user.json');

 
//  $result = [
//         'type' => 'success',
//         'data' => $json,
//         'errors' => []
// ];
   
// header('Content-Type: application/json');
// echo json_encode($result);


echo $json;
