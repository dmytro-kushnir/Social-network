<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $filename = $_FILES['file']['name'];
  $meta = $_POST;
  $destination = $meta['targetPath'] . $filename;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );