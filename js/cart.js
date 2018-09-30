var cart={};

$.getJSON('cart.json', function(data){
    var goods = data;
    //console.log(goods);
    checkCart();
    //console.log(cart);
    showCart();
    
    function showCart(){
        if($.isEmptyObject(cart))
        {
            var out = '<p>Заказ пуст. Добавьте блюда в заказ <a href="menu">меню</a></p>';
            $('#my-cart').html(out);
        }
        else
        {
            var out='';
            for(var key in cart){
                out+='<div class="single-goods" height="300px">';
                out+= '<button class="btn btn-danger delete" data-art="'+key+'">x</button>';
                out+= '<img src="'+goods[key]['image']+'" height="200px">';
                out+= '<p>'+goods[key].name+'</p>';
                out+= '<button class="btn btn-info minus" data-art="'+key+'" id="btnGoods">-</button>';
                out+= cart[key];
                out+= '<button class="btn btn-info plus" data-art="'+key+'" id="btnGoods">+</button>';
                out+= '<br>'+"Цена: "+cart[key]*goods[key].cost;
                out+= '<br>';    
                out+='</div>';
            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }
    
    function plusGoods(){
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
    
    function minusGoods(){
        var articul = $(this).attr('data-art');
        cart[articul]--;
        if(cart[articul]==0)delete cart[articul];
        saveCartToLS();
        showCart();
    }
    
    function deleteGoods(){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCart();
    }
});

function checkCart(){
    if(localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
} 

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart));
}