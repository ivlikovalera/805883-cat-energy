var catname = document.querySelector("#name");
var weight = document.getElementById("weight");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var send = document.querySelector(".form__button");

catname.addEventListener("blur", function () {
  if (catname.classList.contains("form__input--error") && catname.value) {
    catname.classList.remove("form__input--error");
  }
});

weight.addEventListener("blur", function () {
  if (weight.classList.contains("form__input--error") && weight.value) {
    weight.classList.remove("form__input--error");
  }
});

email.addEventListener("blur", function () {
  if (email.classList.contains("form__input--error") && email.value) {
    email.classList.remove("form__input--error");
  }
});

phone.addEventListener("blur", function () {
  if (phone.classList.contains("form__input--error") && phone.value) {
    phone.classList.remove("form__input--error");
  }
});

send.addEventListener("click", function (evt) {
  if (!catname.value) {
    catname.classList.add("form__input--error");
  }
  if (!weight.value) {
    weight.classList.add("form__input--error");
  }
  if (!email.value) {
    email.classList.add("form__input--error");
  }
  if (!phone.value) {
    phone.classList.add("form__input--error");
  }
});
