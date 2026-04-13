function loadCart() {

    let cart = localStorage.getItem("cart");
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart == null) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
        document.getElementById("grandTotal").innerHTML = 0;
    }
    else {

        cart = JSON.parse(cart);

        for (let i = 0; i < cart.length; i++) {

            if (cart[i].quantity == null) {
                cart[i].quantity = 1;
            }

            let itemTotal = cart[i].price * cart[i].quantity;
            total = total + itemTotal;

            cartItems.innerHTML +=
            '<div class="card mb-3">' +
            '<div class="card-body">' +

            '<h5>' + cart[i].name + '</h5>' +

            '<p>Price: $' + cart[i].price + '</p>' +

            '<p>Quantity: <input type="number" value="' + cart[i].quantity + '" onchange="changeQty(' + i + ', this.value)"></p>' +

            '<p>Total: $' + itemTotal + '</p>' +

            '<button class="btn btn-danger" onclick="removeItem(' + i + ')">Remove</button>' +

            '</div></div>';
        }

        document.getElementById("grandTotal").innerHTML = total;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function changeQty(index, qty) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    qty = Number(qty);

    if (qty < 1) {
        qty = 1;
    }

    cart[index].quantity = qty;

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();