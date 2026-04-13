    function loadSummary() {
      let cart = localStorage.getItem("cart");
      let summary = document.getElementById("summary");
      let total = 0;

      summary.innerHTML = "";

      if (cart == null) {
        summary.innerHTML = "<p>Your cart is empty</p>";
        document.getElementById("total").innerHTML = 0;
      }
      else {
        cart = JSON.parse(cart);

        if (cart.length == 0) {
          summary.innerHTML = "<p>Your cart is empty</p>";
          document.getElementById("total").innerHTML = 0;
        }
        else {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].quantity == null) {
              cart[i].quantity = 1;
            }

            let itemTotal = cart[i].price * cart[i].quantity;
            total = total + itemTotal;

            summary.innerHTML = summary.innerHTML +
              '<div class="card mb-3">' +
                '<div class="card-body">' +
                  '<h5 class="card-title">' + cart[i].name + '</h5>' +
                  '<p>Price: $' + cart[i].price + '</p>' +
                  '<p>Quantity: ' + cart[i].quantity + '</p>' +
                  '<p>Total: $' + itemTotal + '</p>' +
                '</div>' +
              '</div>';
          }

          document.getElementById("total").innerHTML = total;
        }
      }
    }

    function placeOrder() {
      let name = document.getElementById("name").value;
      let address = document.getElementById("address").value;
      let payment = document.getElementById("payment").value;
      let cart = localStorage.getItem("cart");

      if (name == "") {
        document.getElementById("message").innerHTML = "Please enter your name";
        document.getElementById("message").className = "mt-3 text-danger";
      }
      else if (address == "") {
        document.getElementById("message").innerHTML = "Please enter your address";
        document.getElementById("message").className = "mt-3 text-danger";
      }
      else if (payment == "") {
        document.getElementById("message").innerHTML = "Please select a payment method";
        document.getElementById("message").className = "mt-3 text-danger";
      }
      else if (cart == null || JSON.parse(cart).length == 0) {
        document.getElementById("message").innerHTML = "Your cart is empty";
        document.getElementById("message").className = "mt-3 text-danger";
      }
      else {
        document.getElementById("message").innerHTML = "Order placed successfully, no real payment";
        document.getElementById("message").className = "mt-3 text-success";

        localStorage.removeItem("cart");
        loadSummary();
      }
    }

    loadSummary();