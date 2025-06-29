var $form = document.querySelector("form");
var $error = document.querySelector(".error");
var $inputFields = document.querySelectorAll("input-field");
var $email = document.getElementById("email");
var $password = document.getElementById("password");

function addError(message) {
  $error.innerHTML = message;
  $error.style.display = "block";
}

function removeError() {
  $error.innerHTML = "";
  $error.style.display = "hidden";
}

function validate(event) {
  event.preventDefault();
  $error.style.display = "none";

  if ($email.value !== "123" || $password.value !== "123") {
    addError("Email atau password salah");
  } else {
    removeError();
    alert("Anda berhasil Login!");
  }
}

$form.addEventListener("submit", validate);
