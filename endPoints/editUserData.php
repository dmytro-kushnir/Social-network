<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();
$data = json_decode(file_get_contents('php://input'), true);

$info = $Db->selectSqlPrepared("SELECT first_name, second_name, birthday, city, education, mobile_number FROM users_data WHERE userId = '$data'");
$infoEmail = $Db->selectSqlPrepared("SELECT userEmail FROM users WHERE userId = '$data'");


$result = [
    'info' => $info,
    'infoEmail' => $infoEmail,
    'errors' => []
];

header('Content-Type: application/json');
echo json_encode($result);
