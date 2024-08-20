let open = document.querySelector(".open");
let close = document.querySelector(".close");
let nav = document.querySelector("nav ul");
let logo = document.querySelector(".logo");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  nav.style.transform = "translateY(0%)";
  nav.style.opacity = 1;
  logo.style.opacity = 0;
  document.body.classList.add("overflow");
  setTimeout(() => {
    logo.style.transition = ".5s ease-out";
    logo.style.opacity = 1;
  }, 100);
});

close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  nav.style.transform = "translateY(-100%)";
  nav.style.opacity = 0;
  document.body.classList.remove("overflow");
});
