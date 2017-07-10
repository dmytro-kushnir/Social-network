<?php 
 

$answer = json_decode(file_get_contents('php://input'), true);

     
    $json = file_get_contents('./app/jsons/friend.json');

echo $json;

exit;
 ?>