let btn = document.querySelector("#btn");
let curmode = "light";
btn.addEventListener("click", () => {
  if (curmode === "light") {
   curmode="dark";
  } else {
   curmode="light";
  }
  console.log(curmode)
});
