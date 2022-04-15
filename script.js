const mobileIcon = document.querySelector(".mobile-icon");
const mobileMenu = document.querySelector(".mobile-menu");

mobileIcon.addEventListener("click", (e) => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});
