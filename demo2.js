// let namasteybtn = document.querySelector("button");
// namasteybtn.addEventListener("click",showMsg);

// function showMsg(){
//     alert("Namastey Duniya");
// }


let namasteybtn = document.querySelector("button");
namasteybtn.addEventListener("click",inputmsg);

function inputmsg(){
    let name = prompt("Enter Nane of Student");
    namasteybtn.textContent = "Roll No. 1:" + name;
}
