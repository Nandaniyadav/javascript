
//  let btn1 = document.querySelector("#btn");
// btn1.onclick = () => {
//   console.log("clicked");
// };

/////////////////
let btn1 = document.querySelector("#btn");
btn1.onclick=(e)=>{
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(e.clientX,e.clientY)
}
