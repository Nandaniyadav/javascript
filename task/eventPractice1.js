let modebtn = document.querySelector("#btn");
let body = document.querySelector("body");
let curmode = "light";

modebtn.addEventListener("click", () => {
  if (curmode === "light") {
    curmode = "dark";
    body.style.backgroundColor = "Black";
  } else {
    curmode = "light";
    body.style.backgroundColor = "white";
  }
  console.log(curmode);
});
