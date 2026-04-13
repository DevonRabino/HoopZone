function Login() {

  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  if (email == "") {
    document.getElementById("Message").innerHTML = "Please Enter email";
    document.getElementById("Message").className = "text-danger mt-3 text-center";
  }
  else if (password == "") {
    document.getElementById("Message").innerHTML = "Please Enter Password";
    document.getElementById("Message").className = "text-danger mt-3 text-center";
  }
  else {

    let user = {
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("Message").innerHTML = "Login successful";
    document.getElementById("Message").className = "text-success mt-3 text-center";
  }
}