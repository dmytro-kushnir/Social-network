<?php

    include ('Config/config.php');
    $Db = new \Db\Db();
    $temp = array_keys($_POST);
    $data = json_decode($temp[0], true);

    if (!empty($data)) {
        $insertId = $Db->addSql('users', $data);
    }

    $result = [
        'type' => 'succes',
        'insertId' => $insertId,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
