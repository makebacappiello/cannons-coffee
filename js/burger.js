console.log("hello");
const ul = document.querySelector("nav ul");
console.log(ul);
const burgerButton = document.getElementById("burger-button");
console.log(burgerButton);
const menuOpenId = document.getElementById("menu-open");
const menuClosedIcon = document.getElementById("menu-closed");
console.log(menuOpenId);
console.log(menuClosedIcon);
function handleHamburgerButtonClick() {
  console.log("Button clicked!!");
  ul.classList.toggle("visible");
  menuOpenId.classList.toggle("visible");
  menuClosedIcon.classList.toggle("visible");
}
burgerButton.addEventListener("click", handleHamburgerButtonClick);
