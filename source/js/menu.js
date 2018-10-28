var nav = document.querySelector(".main-nav__wrapper");
var toggle = document.querySelector(".main-nav__toggle");
var header = document.querySelector(".page-header__inner");

toggle.addEventListener("click", function () {
  console.log("worked");
  if (nav.classList.contains("main-nav__wrapper--opened")) {
    console.log("open");
    toggle.classList.remove("main-nav__toggle--close");
    toggle.classList.add("main-nav__toggle--open");
    nav.classList.remove("main-nav__wrapper--opened");
    nav.classList.add("main-nav__wrapper--closed");
    header.classList.add("page-header__inner--closed");
  } else {
    console.log("closed");
    toggle.classList.remove("main-nav__toggle--open");
    toggle.classList.add("main-nav__toggle--close");
    nav.classList.remove("main-nav__wrapper--closed");
    nav.classList.add("main-nav__wrapper--opened");
    header.classList.remove("page-header__inner--closed");
  }
})
