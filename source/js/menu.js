var nav = document.querySelector(".main-nav__wrapper");
var toggle = document.querySelector(".main-nav__toggle");
var header = document.querySelector(".page-header__inner");

toggle.classList.remove("main-nav__toggle--close");
nav.classList.add("main-nav__wrapper--closed");
header.classList.add("page-header__inner--closed");

toggle.addEventListener("click", function () {
  if (!nav.classList.contains("main-nav__wrapper--closed")) {
    toggle.classList.remove("main-nav__toggle--close");
    nav.classList.add("main-nav__wrapper--closed");
    header.classList.add("page-header__inner--closed");
  } else {
    toggle.classList.add("main-nav__toggle--close");
    nav.classList.remove("main-nav__wrapper--closed");
    header.classList.remove("page-header__inner--closed");
  }
})
