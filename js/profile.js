let currentUser = JSON.parse(localStorage.getItem("user"));

let userName = document.getElementById("userName");
let email = document.getElementById("email");

userName.innerText = currentUser.name;
email.innerHTML = currentUser.email;