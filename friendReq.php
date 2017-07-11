<?php




$answer = json_decode(file_get_contents('php://input'), true);

if(isset($_GET['user_id'])) // при перезавантаженні сторінки, якщо був відправлений ID користувача
    $answer = $_GET['user_id']; // добавити його до перевірки

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
