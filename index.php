<?php
class User {

 public  $name;
 public $age;
}
$user = new User();
$user->name  = "John";
$user->age = "34";
$myJSON = json_encode($user);
header('Content-type: application/json');
echo $myJSON;
