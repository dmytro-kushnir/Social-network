<?php 
 

$answer = json_decode(file_get_contents('php://input'), true);

if($answer == 100001)  { // Єва Грін
    $json = file_get_contents('./app/jsons/friend.json');
    echo $json;
}
else{
//    echo "<script type='text/javascript'>alert('Користувач за номером ' .$answer.  ' не знайдений');</script>";
}
exit;
 ?>