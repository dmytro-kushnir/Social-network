<?php
include ('../Config/config.php');
include ('../Db/Db.php');
$Db = new \Db\Db();

  $data = json_decode(file_get_contents('php://input'), true);
  $subPage = $data["request"]["pageName"];
  $id = $data["request"]["id"];
switch ($subPage) {
    case "mainPage":
       $data_arr = $Db->selectSqlPrepared("SELECT id, first_name, avatar_url FROM users_data WHERE id = '$id' ");
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
      FROM gallery INNER JOIN users_data ON users_data.id=gallery.id_owner WHERE id_owner = '$id' LIMIT 20");

// GALLERY POSTS
        foreach ($gallery as $key => $value) { // get gallery posts
                  $posts = $Db->selectSqlPrepared("SELECT 
   postgallery.id, postgallery.sender_name, postgallery.sender_url, postgallery.send_date, postgallery.post_text, postgallery.post_link, postgallery.post_image, postgallery.post_likes
      FROM postgallery INNER JOIN users_data ON users_data.id=postgallery.id WHERE id_image = '$value[id]'");
                      $gallery[$key]["posts"] = $posts;
        }
        $data_arr[0]["gallery"] = $gallery;
        break;


    case "chat":
        break;
}
    
 $result = [
        'success' => true,
        'info' => $data_arr[0],
        'errors' => []
    ];

    header('Content-Type: application/json');
    echo json_encode($result);
