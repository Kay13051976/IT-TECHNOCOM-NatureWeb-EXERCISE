var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
var model = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == model) {
    model.style.display = "none";
  }
};
