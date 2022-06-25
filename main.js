// import users from "./users.js";

const btns = document.querySelectorAll(".btn");

btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      btns[i].classList.remove("active");
    }
    elem.classList.add("active");
  });
});
