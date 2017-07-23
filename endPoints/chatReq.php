<?php 
$answer = json_decode(file_get_contents('php://input'), true);

switch ($answer) {
    case 100001:  // Єва Грін
        $json = file_get_contents('.././app/jsons/chat.json');
        echo $json;
        break;
}
exit;
?>