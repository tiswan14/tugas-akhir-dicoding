const menuToggle = document.querySelector(".menu");
const list = document.querySelector(".list");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("change");
});

menuToggle.addEventListener("click", () => {
  list.classList.toggle("active");
});
