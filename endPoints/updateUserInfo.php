<?php
    include ('../Config/config.php');
    include ('../Db/Db.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);

    $user_data = $data['updateInfoUser'];
    $user_info = $data['userEmail'];
    $user_id = $data['userId'];

    $infoChange = $Db->updateSql('users_data', $user_data, "userId=".$user_id['userId']);
    $infoChangeEmail =$Db->updateSql('users',  $user_info, "userId=".$user_id['userId']);

    $result = [
        'infoChange'=> $infoChange,
        'infoChangeEmail'=> $infoChangeEmail,
        'errors'=> []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
?>