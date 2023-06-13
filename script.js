const themeToggler = document.querySelector("#switch button");
const imgs = ["./assets/avatar.png", "./assets/avatar-light.png"];
const img = document.querySelector("#profile img");

themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");

  if (document.documentElement.classList.contains("light")) {
    img.setAttribute("src", imgs[1]);
  } else {
    img.setAttribute("src", imgs[0]);
  }
});
