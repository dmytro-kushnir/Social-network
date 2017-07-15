<?php

if ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

    include ('./Config/config.php');
    $Db = new \Db\Db();
    $temp = array_keys($_POST);
    $data = json_decode($temp[0], true);

    if (!empty($data)) {
        $insertId = $Db->addSql('user', $data);
    }

    $result = [
        'type' => 'succes',
        'insertId' => $insertId,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);

//    $result = '';
//    
//    if(!empty($_POST)){
////        foreach ($_POST as $key => $value){
////            $result .= $key . '->' . $value . '; ';
////        }
//        $temp = array_keys($_POST);
//        //$result .= $temp[0];
//        foreach (json_decode($temp[0], true) as $key=> $value){
//           $result .= $key . '->' . $value . '; ';
//    }   
//    
//    }
    //echo $result;
}