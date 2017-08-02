<?php

 $data= file_get_contents('php://input');
  $result = [
        'token' => $data,
        'errors' => []
];

echo json_encode($result);

exit;