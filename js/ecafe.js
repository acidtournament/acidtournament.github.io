var cart ={};

$('document').ready (function(){
    loadGoods();
    checkCart();
    showMyCart();
});

function loadGoods () {
    //Dowloads
    $.getJSON ('cart.json', function (data) {
        //console.log(data);
        var out='';
    for (var key in data){
        out+='<div class="single-goods" width="300px">';
        out+='<p>'+data[key]['name']+'<p>';
        out+='<p> Цена: '+data[key]['cost']+'<p>';
        out+='<img src="'+data[key]['image']+'" height="200px"></img>';
        out+='<button class="btn btn-info add-to-cart" data-art="'+key+'">Купить</button>';
        out+='</div>';
    }
    $('#goods').html(out);
    $('button.add-to-cart').on('click', addToCart);
    })
}

function addToCart(){
    var articul = $(this).attr('data-art');
    if(cart[articul]!=undefined)
    {
        cart[articul]++;
    }
    else
    {
        cart[articul]= 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(cart);
    showMyCart();
}

function checkCart(){
    if(localStorage.getItem('cart')!=null){
        cart=JSON.parse(localStorage.getItem('cart'));
    }
}

function showMyCart(){
    var out ="";
    for(var w in cart){
        out+=w+'---'+cart[w]+'<br>';
    }
    out+='<a href="cart">корзина</a>'
    //$('#mini-cart').html(out);
}