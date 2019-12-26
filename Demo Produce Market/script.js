// Cart array
var cart = [];

// Doc ready func- loads cart from local storage
$(function(){
  loadCart();
  saveCart();
}); // end doc ready

// -------- Shopping Cart ----------

// Cart items
var Item = function(name, price, count){
  this.name = name;
  this.price = price;
  this.count = count;
};

// Item add to cart btn
$('.add-to-cart').click(function(){
  var e = event.target;
  var name = e.getAttribute('data-name');
  var price = e.getAttribute('data-price');
  addItemToCart(name, price, 1);
  displayCart();

  e.classList.add('show');
  setTimeout(function(){
    e.classList.remove('show');
  },1500);

  e.classList.add('btn-click');
  setTimeout(function(){
    e.classList.remove('btn-click');
  },300);
}); // end Add To Cart

// Clear cart button click
$('#clear-cart').click(function(){
  emptyCart();
  displayCart();
});


// Display Cart
function displayCart(){
  var cartItems = cart;
  var viewCart = "";
  var checkout = "";

  for (var i in cartItems){
    cartItems[i].total = (cartItems[i].price * cartItems[i].count).toFixed(2);
    viewCart +=
    "<span class='cart-1 my-2'>" + cartItems[i].name + "</span>" +
    "<span class='cart-2 my-2'>" + cartItems[i].count + "</span>" +
    "<span class='cart-3 my-2'>" + "$" + cartItems[i].price + "</span>" +
    "<span class='cart-4 my-2'>" + "$" + cartItems[i].total + "</span>" +
    "<span class='cart-5 my-2'>" +
    "<i data-name='"+cartItems[i].name+"' role='btn' class='add-item material-icons'>add_box</i>" +
    "<i data-name='"+cartItems[i].name+"' class='remove-item material-icons'>remove_circle</i>" +
    "<i data-name='"+cartItems[i].name+"' class='delete-item material-icons'>cancel</i>" +
    "</span>" +
    "<hr>"

    checkout +=
    "<span class='cart-1 py-2'>" + cartItems[i].name + ": " + "</span>" +
    "<span class='cart-2 py-2'>" + cartItems[i].count + "</span>"
  }

  // Show cart on html
  $('#show-cart').html(viewCart);
  // Total Cart Cost
  $('#total-cart').html(cartTotalCost());
  // Total Units in Cart
  $('#units-cart').html(countItems());
  // Total Units in Cart - copy to header
  $('#units-cart-copy').html(countItems());
  $('#checkout-cart').html(checkout);

// --- Buttons below to adjust cart qty ---
// Remove btn func
  $('.remove-item').click(function(){
    var name = this.getAttribute('data-name');
    removeItemFromCart(name);
    displayCart();
  });
// Delete btn func
  $('.delete-item').click(function(){
    var name = this.getAttribute('data-name');
    clearItemFromCart(name);
    displayCart();
  });
// Add btn func
  $('.add-item').click(function(){
    var name = this.getAttribute('data-name');
    addItemToCart(name, 0, 1);
    displayCart();
  });

}; // ---  end Display function ------

// ----- Shopping Cart base functions -----
function addItemToCart(name, price, count){
  for(var i in cart){
    if(cart[i].name === name){
      cart[i].count += count;
      saveCart();
      return;
    }
  }
  var item = new Item(name, price, count);
  cart.push(item);
  saveCart();
};


// Remove 1 unit of an item from cart
function removeItemFromCart(name, price, count){
  for(var i in cart){
    if(cart[i].name === name){
      cart[i].count -= 1;
       if(cart[i].count == 0){
       cart.splice(i, 1);
       }
      break;
    }
  }
  saveCart();
};

// Remove ALL units of an Item
function clearItemFromCart(name){
  for(var i in cart){
    if(cart[i].name === name){
    cart.splice(i, 1);
    break;
    }
  }
  saveCart();
};

// Clear Entire Cart
function emptyCart(name, price, count){
  cart = [];
  saveCart();
};

// Total Cart Unit Count
function countItems(){
  var totalCount = 0;
  for(var i in cart){
    totalCount += cart[i].count;
  }
  x = "units";
  y = "unit";
  if(totalCount == 0 || totalCount > 1){
    var tot = totalCount + " " + x;
  }
  else {
    var tot = totalCount + " " + y;
  }
  return tot;
};

// Cart Total Cost
function cartTotalCost(){
  var cartTotal = 0;
  for(var i in cart){
    cartTotal += cart[i].price * cart[i].count;
    }
    return "$" + cartTotal.toFixed(2);
};

// Save cart to local storage
function saveCart(){
  if(cart===null){
    cart=[];
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }
  else {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }
}

// Load cart
function loadCart(){
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
  displayCart();
}
// --------- end cart app ---------

// ---- Toggle navigation menu button icon
$('.navbar-toggler').click(function(){
  $('.navbar-toggler-icon').toggle();
  $('.hide-menu').toggle();
});
