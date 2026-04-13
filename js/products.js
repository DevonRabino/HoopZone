function filterProducts(product) {
    let products = document.querySelectorAll(".product");

    for (let i = 0; i < products.length; i++) {
        if (product == "all" || products[i].getAttribute("data-category") == product) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

function searchProducts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    for (let i = 0; i < products.length; i++) {
        let title = products[i].querySelector(".card-title").innerText.toLowerCase();

        if (title.indexOf(input) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

function addToCart(name, price) {
    let cart = localStorage.getItem("cart");

    if (cart == null) {
        cart = [];
    }
    else {
        cart = JSON.parse(cart);
    }

    let product = {
        name: name,
        price: price,
        quantity: 1
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}