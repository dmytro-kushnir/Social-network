<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $data = json_decode(file_get_contents('php://input'), true);
  $select = "SELECT count(*) as counter FROM users WHERE userEmail = '$data[userEmail]' AND userPassword = '$data[userPassword]'";
  $query = $Db->query($select);
  $query->execute();
  $num = $query->fetchAll(PDO::FETCH_ASSOC);
  $userInfo = null;
<<<<<<< HEAD
<<<<<<< HEAD
  $data_arr = null;
  
  if(!empty($data)){
    if($num[0]['counter'] > 0){
     
      // GET ALL GENERAL DATA
      $data_arr = $Db->selectSqlPrepared("SELECT * FROM users_data WHERE id = '1'");

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
          FROM avatars INNER JOIN users_data ON users_data.id=avatars.id_owner WHERE id_owner = 1" );
    // AVATAR POSTS
    foreach($avatars as $key => $value){ // get avatar posts
      $posts = $Db->selectSqlPrepared("SELECT 
      postavatars.id, postavatars.sender_name, postavatars.sender_url, postavatars.send_date, postavatars.post_text, postavatars.post_link, postavatars.post_image, postavatars.post_likes
          FROM postavatars INNER JOIN users_data ON users_data.id=postavatars.id WHERE id_image = '$value[id]'");
          $avatars[$key]["posts"] = $posts;
    }
    $data_arr[0]["avatars"] = $avatars;

=======
  $id = null;
if (!empty($data)) {
    if ($num[0]['counter'] > 0) {
        $id = 1; //АНЯ.  знайди айдішку по логінуванню і передавай сюди
        $success = true;
>>>>>>> origin/master
    ///////////////////////////////////
=======

>>>>>>> d5bf4b58041411531532a5f78c3f86f0fcd15145
    } else {
        $userInfo = "Користувача з таким емейлом, або паролем не існує";
        $success= false;
    }
}
 $result = [
        'success' => $success,
        'id' => $id,
        'userInfo'=>$userInfo,
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
