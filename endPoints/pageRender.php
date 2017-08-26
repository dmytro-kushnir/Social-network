<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

$id = json_decode(file_get_contents('php://input'), true);

 // GET ALL GENERAL DATA
  $data_arr = $Db->selectSqlPrepared("SELECT * FROM users_data WHERE id = '$id' ");

/////////////////////////////////// 

  $friendsIdArr = explode(",",$data_arr[0]["friends"]); // convert friends string to array
  $friends = array();
  // FRIENDS 
    if($friendsIdArr[0] != "" || !empty($friendsIdArr[0])){
  foreach($friendsIdArr as $value){
    $buf = $Db->selectSqlPrepared("SELECT id, first_name, second_name, count_friends, avatar_url 
      FROM users_data WHERE id = '$value' LIMIt 5");
    $friends[] = $buf[0];
  }
  $data_arr[0]["friends"] = $friends; // sets friends to data_arr instead of friends string
    }   
///////////////////////////////////

 // AVATARS
$avatars = $Db->selectSqlPrepared("SELECT 
    avatars.id, avatars.sender_name, avatars.sender_url, avatars.image_url, avatars.reciever_url, avatars.image_date, avatars.likes 
      FROM avatars INNER JOIN users_data ON users_data.id=avatars.id_owner WHERE id_owner = '$id'" );
// AVATAR POSTS
foreach($avatars as $key => $value){ // get avatar posts
  $posts = $Db->selectSqlPrepared("SELECT 
   postavatars.id, postavatars.sender_name, postavatars.sender_url, postavatars.send_date, postavatars.post_text, postavatars.post_image, postavatars.post_likes
      FROM postavatars INNER JOIN users_data ON users_data.id=postavatars.id WHERE id_image = '$value[id]'");
      $avatars[$key]["posts"] = $posts;
}
$data_arr[0]["avatars"] = $avatars;

///////////////////////////////////

// USER POSTS
$posts = $Db->selectSqlPrepared("SELECT 
    post.id, post.sender_name, post.sender_url, post.send_date, post.post_text, post.post_image, post.post_likes
      FROM post   WHERE id_owner = '$id' ORDER BY post.id DESC");
$data_arr[0]["posts"] = $posts;

///////////////////////////////////

// GALLERY
$gallery = $Db->selectSqlPrepared("SELECT 
  gallery.id, gallery.sender_name, gallery.sender_url, gallery.image_url, gallery.reciever_url, gallery.image_date, gallery.likes 
      FROM gallery INNER JOIN users_data ON users_data.id=gallery.id_owner WHERE id_owner = '$id' ORDER BY gallery.id DESC LIMIT 20");

// GALLERY POSTS
foreach($gallery as $key => $value){ // get gallery posts
  $posts = $Db->selectSqlPrepared("SELECT 
   postgallery.id, postgallery.sender_name, postgallery.sender_url, postgallery.send_date, postgallery.post_text, postgallery.post_image, postgallery.post_likes
      FROM postgallery INNER JOIN users_data ON users_data.id=postgallery.id WHERE id_image = '$value[id]'");
      $gallery[$key]["posts"] = $posts;
      $gallery[$key]["id"] = $key+1; // reset DB key to foreach $key 
}
$data_arr[0]["gallery"] = $gallery;

///////////////////////////////////

$result = [
        'success' => true,
        'info' => $data_arr[0],
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
?>
