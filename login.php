<?php

$answer = json_decode(file_get_contents('php://input'), true);

var_dump($answer);

exit;