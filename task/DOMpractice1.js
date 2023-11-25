// Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.

let btn = document.createElement("button");
btn.innerText = "click me";

btn.style.color = "white";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);
