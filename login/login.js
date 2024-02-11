let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
let PopuP = document.getElementById("Popup");

function openpopup() {
  PopuP.classList.add("open-popup");
}
function closepopup() {
  PopuP.classList.remove("open-popup");
}
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll");
  scroll.classList.toggle("show", window.scrollY > 0);
});
