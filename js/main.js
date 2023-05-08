const menu = document.querySelector(".menu");
const closed = document.querySelector(".close");
const navList = document.querySelector(".list");

menu.addEventListener("click", () => {
  navList.classList.toggle("list-active");
});
