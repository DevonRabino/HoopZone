    function SignUp() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      if (name == "") {
        document.getElementById("message").innerHTML = "Please enter your name";
        document.getElementById("message").className = "mt-3 text-center text-danger";
      }
      else if (email == "") {
        document.getElementById("message").innerHTML = "Please enter your email";
        document.getElementById("message").className = "mt-3 text-center text-danger";
      }
      else if (password == "") {
        document.getElementById("message").innerHTML = "Please enter your password";
        document.getElementById("message").className = "mt-3 text-center text-danger";
      }
      else if (confirmPassword == "") {
        document.getElementById("message").innerHTML = "Please confirm your password";
        document.getElementById("message").className = "mt-3 text-center text-danger";
      }
      else if (password != confirmPassword) {
        document.getElementById("message").innerHTML = "Passwords do not match";
        document.getElementById("message").className = "mt-3 text-center text-danger";
      }
      else {
        let user = {
          name: name,
          email: email,
          password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("message").innerHTML = "Registration successful";
        document.getElementById("message").className = "mt-3 text-center text-success";
      }
    }