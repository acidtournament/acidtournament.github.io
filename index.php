<?php
$route = $_GET['route'];
print_r($route);
require 'templates/header.php';
//connectDB();
switch($route){
    case '':
        require 'templates/main.php';
        break;
    case 'cart':
        require 'templates/cart.php';
        break;
    case 'about':
        require 'templates/about.php';
        break; 
    case 'menu':
        require 'templates/main.php';
        break;
}

require 'templates/footer.php';

/*$mysql= false;
function connectDB () {
    global $mysqli;
    $mysqli = mysqli_connect("localhost", "root", "", "menu");
 if(mysqli_connect_errno()){
     echo "<script>console.log('1');</script>";
 }   
    
}*/