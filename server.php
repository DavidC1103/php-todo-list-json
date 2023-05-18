<?php

$json_string = file_get_contents('todo-list.json');


$todoList = json_decode($json_string);

var_dump($todoList);

header('Content-Type: application/json');
echo json_encode($todoList);




