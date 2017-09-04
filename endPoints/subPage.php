<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $data = json_decode(file_get_contents('php://input'), true);
  $subPage = $data["request"]["pageName"];
  $id = $data["request"]["id"];
if (isset($data["request"]["idChat"])) {
    $idChat = $data["request"]["idChat"];
}
$chatData = array();
if (isset($data["request"]["chatData"])) {
    $chatData[] = $data["request"]["chatData"];
}

switch ($subPage) {
    // MAINPAGE
    case "mainPage":
        $data_arr = $Db->selectSqlPrepared("SELECT id, first_name,second_name, avatar_url FROM users_data WHERE id = '$id' ");
        break;
    // USERLIST
    case "userList":
        $data_arr[0] = $Db->selectSqlPrepared("SELECT id, first_name,second_name, avatar_url FROM users_data");
        break;
    // USERPOST
    case "uploadPost":
        $posts = $Db->selectSqlPrepared("SELECT 
post.id, post.sender_name, post.sender_url, post.send_date, post.post_text, post.post_image, post.post_likes
  FROM post  WHERE id_owner = '$id' ORDER BY post.id DESC");
        $data_arr[0] = $posts;
        break;
    // USER BACKGROUND
    case "uploadBackground":
        $background = $Db->selectSqlPrepared("SELECT users_data.background_url
    FROM users_data  WHERE id = '$id' ");
        $data_arr[0] =  $background;
        break;
    // USER AVATAR
    case "uploadAvatar":
        $global_avatars = $Db->selectSqlPrepared("SELECT users_data.avatar_url
            FROM users_data  WHERE id = '$id' ");
        $avatars = $Db->selectSqlPrepared("SELECT 
    avatars.id, avatars.sender_name, avatars.sender_url,avatars.is_set, avatars.image_url, avatars.reciever_url, avatars.image_date, avatars.likes 
      FROM avatars INNER JOIN users_data ON users_data.id=avatars.id_owner WHERE id_owner = '$id'" );
    // AVATAR POSTS
        foreach ($avatars as $key => $value) { // get avatar posts
                  $posts = $Db->selectSqlPrepared("SELECT 
   postavatars.id, postavatars.sender_name, postavatars.sender_url, postavatars.send_date, postavatars.post_text, postavatars.post_image, postavatars.post_likes
      FROM postavatars INNER JOIN users_data ON users_data.id=postavatars.id WHERE id_image = '$value[id]'");
                      $avatars[$key]["posts"] = $posts;
        }
        $data_arr[0]["avatars"] = $avatars;
        $data_arr[0]["global_avatars"] = $global_avatars;
        break;
    
    case "friends":
        $data_arr = $Db->selectSqlPrepared("SELECT friends FROM users_data WHERE id = '$id' ");
        $friendsIdArr = explode(",", $data_arr[0]["friends"]); // convert friends string to array
        $friends = array();
      // FRIENDS
        foreach ($friendsIdArr as $value) {
                $buf = $Db->selectSqlPrepared("SELECT id, first_name, second_name, count_friends, avatar_url 
      FROM users_data WHERE id = '$value'");
                $friends[] = $buf[0];
        }
        $data_arr[0]["friends"] = $friends; // sets friends to data_arr instead of friends string
        break;

    case "gallery":
        // GALLERY
        $gallery = $Db->selectSqlPrepared("SELECT 
  gallery.id, gallery.sender_name, gallery.sender_url, gallery.image_url, gallery.reciever_url, gallery.image_date, gallery.likes 
      FROM gallery  WHERE id_owner = '$id' ORDER BY gallery.id DESC LIMIT 20");

// GALLERY POSTS
        foreach ($gallery as $key => $value) { // get gallery posts
                  $posts = $Db->selectSqlPrepared("SELECT 
   postgallery.id, postgallery.sender_name, postgallery.sender_url, postgallery.send_date, postgallery.post_text, postgallery.post_image, postgallery.post_likes
      FROM postgallery INNER JOIN users_data ON users_data.id=postgallery.id_owner WHERE id_image = '$value[id]'");
                      $gallery[$key]["posts"] = $posts;
        }
        $data_arr[0]["gallery"] = $gallery;
        break;
    case "chat":
    // CHAT
        $chat = $Db->selectSqlPrepared("SELECT chat.id,chat.id_sender, chat.sender, chat.last_msg_url, chat.last_msg_text, chat.sender_name, chat.chat_date, chat.reciever_url
      FROM chat INNER JOIN users_data ON users_data.id=chat.id_owner WHERE id_owner = '$id' ORDER BY chat.id DESC LIMIT 20");
        $data_arr[0]["chat"] = $chat;
        break;
    case "chatUser":
    // CHATUSER
         $chat = $Db->selectSqlPrepared("SELECT chat.id_sender, chat.sender_name, chat.chat_date, chat.reciever_url, chat.sender
      FROM chat WHERE id_sender = '$idChat'");
        if (empty($chat)) { // нема такого користувача
            $insertId = $Db->addSql('chat', $chatData[0]); // добавити його
            $data_arr = $insertId;
        } else { // такий користувач вже існує
      // CHATUSER POSTS
            foreach ($chat as $key => $value) { // get chat posts
                  $posts = $Db->selectSqlPrepared("SELECT 
   postchat.id, postchat.side, postchat.message_data, postchat.message_data, postchat.message_date
      FROM postchat INNER JOIN users_data ON users_data.id=postchat.id_owner WHERE id_chat = '$value[id_sender]'");
                      $chat[$key]["messages"] = $posts;
            }
            $data_arr[0]["chat"] = $chat;
        }
        break;
}
    
 $result = [
        'success' => true,
        'info' => $data_arr[0],
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
