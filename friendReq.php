<?php
 

$answer = json_decode(file_get_contents('php://input'), true);
switch ($answer) {
    case 100001:  // Єва Грін
        $json = file_get_contents('./app/jsons/friend.json');
        echo $json;
        break;
    default: // щось пішло не так, завантаження запасної сторінки
        $json = file_get_contents('./app/jsons/noUser.json');
        echo $json;
        break;
}

// else{
//    echo "<script type='text/javascript'>alert('Користувач за номером ' .$answer.  ' не знайдений');</script>";
// }
exit;
