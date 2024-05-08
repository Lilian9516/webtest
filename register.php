<?php
include"db.php",
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST['username'];
    $password=$_POST['password']; 
    $confirmpassword=$_POST['confirmpassword'];

}
if($password!=$confirmpassword){
    echo"password do not match";
    exit();
}
$harsh-password=password_harsh($password,PASSWORD_DEFAULT);
$sql="INSERT INTO users(username,password)























?>
