<script src="https://code.jquery.com/jquery.js"></script>
<script src="js/bootstrap.js"></script>

<?php
switch($route){
    case '':
        echo '<script src = "js/ecafe.js"></script>';
        break;
    case 'cart':
        echo '<script src = "js/cart.js"></script>';
        break;
    case 'menu':
        echo '<script src = "js/ecafe.js"></script>';
        break;
}
?>

</body>
</html>