<?php
session_start();


spl_autoload_register(function ($class_name) {
    //$class_name = 'Form\Input'
    $temp = explode('\\', $class_name); //array(2) { [0]=> string(4) "Form" [1]=> string(5) "Input" } 
    $file = array_pop($temp) . '.php'; //string(9) "Input.php" 
    $path = implode('/', $temp); //string(4) "Form" 
    if (file_exists($path . '/' . $file)) {
        include_once $path . '/' . $file;
    }
});

// localhost

define('DB_HOST', "localhost");
define('DB_PORT', '3306');
define('DB_SCHEMA', "social_network");
define('DB_LOGIN', "root");
define('DB_PASSWORD', "root");
define('DB_UTC', "+2:00");

// hostinger

// define('DB_HOST', 'mysql.hostinger.com.ua');
// define('DB_PORT', '3306');
// define('DB_SCHEMA', 'u579067471_soc');
// define('DB_LOGIN', 'u579067471_dima');
// define('DB_PASSWORD', '1234qwerty');
// define('DB_UTC', '+2:00');