<?php
    include ('../Config/config.php');
    include ('../Db/Db.php');
    $Db = new \Db\Db();
    $data = json_decode(file_get_contents('php://input'), true);
    
    
?>