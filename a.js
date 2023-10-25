let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
searchBtn.addEventListener('click',()=>
{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    
});
menu.addEventListener('click',()=>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window. onscroll = ()=>
{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}
formBtn.addEventListener('click',()=>
{
    loginform.classList.toggle('active');
});
formclose.addEventListener('click',()=>
{
    loginform.classList.remove('active');
});
let cartIcon=document.querySelector('#cart-icon')
let cart=document.querySelector('.cart')
let closeCart=document.querySelector('#close-cart')

cartIcon.onclick = () =>
{
    cart.classList.add("active");
};
closeCart.onclick = () =>
{
    cart.classList.remove("active");
};


// cart woking
if(document.readyState=='loading')
{
    document.addEventListener("DOMContentLoaded",ready);

}
else
{
    ready();
}

// making function

function ready()
{
    var removeCartbuttons=document.getElementsByClassName('cart-remove');
    console.log(removeCartbuttons);
    for(var i=0;i<removeCartbuttons.length;i++)
    {
        var button=removeCartbuttons[i];
        button.addEventListener('click', removeCartItem)
    }

// quqntity change
var quntityInputs=document.getElementsByClassName("cart-quantity");
for(var i=0;i<quntityInputs.length;i++)
{
    var input=quntityInputs[i];
    input.addEventListener("change" ,quntityChanged);
}
// add to cart
var addCart=document.getElementsByClassName("btn");
for(var i=0;i<addCart.length;i++)
{
    var button=addCart[i];
    button.addEventListener("click",addCartClicked);
}
// buy button work
document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked)

}


function buyButtonClicked()
{
    alert("Now you ready with your journey");
    var cartContent=document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild)
    }
    updatetotal();
}
function removeCartItem(event)
{
    var buttonclicked=event.target
    buttonclicked.parentElement.remove();
    updatetotal();
}

// quqntity change
function quntityChanged(event)
{
        var input=event.target
        if(isNaN(input.value) || input.value<=0)
        {
            input.value=1;
        }
        updatetotal();
}
// add to cart
function addCartClicked(event)
{
    var button=event.target;
    var shopProducts=button.parentElement;
    var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price=shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg=shopProducts.getElementsByClassName("product-img")[0];
    addProductTocart(title,price,productImg);
    updatetotal();
}
function addProductTocart(title,price,productImg)
{
    var cartShopBox = document.createElement("div");
     cartShopBox.classList.add("cart-box");
    var cartIteam=document.getElementsByClassName("cart-content")[0];
    var cartIteamsNames=cartIteam.getElementsByClassName("cart-product-title");
    for(var i=0;i<cartIteamsNames.length;i++)
    {
        if(cartIteamsNames[i].innerText==title)
        {
             alert("You havce already add this iteam to the cart");
            return;
        }
    }

    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="fa-solid fa-trash cart-remove"></i>`
    cartShopBox.innerHTML=cartBoxContent;
    cartIteam.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quntityChanged);
    
}
// updatee total
function updatetotal()
{
    var  cartContent= document.getElementsByClassName("cart-content")[0];
    var  cartBoxes= cartContent.getElementsByClassName("cart-box");
    var total=0;

    for(var i=0;i<cartBoxes.length;i++)
    {
        var cartBox=cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
        // var price=parseInt(priceElement.innerText.replace("rs.",""));
        // var quantity=quantityElement.value;
        total= total + price * quantity;
        document.getElementsByClassName("total-price")[0].innerText="rs." + (price*quantity);
    }
    
}
function showMessage() {
    alert("please see your package");
}
function printMessage()
{
    alert("Our team will connect with you");
}
function showmess()
{
    alert("Ready for trip");
}
function printbook()
{
    alert("Now you ready with your journey");
}
function message()
{
    alert("Your login sccessfully");
}
function mess()
{
    alert("Your package is searched but not visible");
}