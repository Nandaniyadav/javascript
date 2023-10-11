// Stack -: all Primitive Datatypes
//Heap -: all Non-Primitive Datatypes

let myName = "Nandanni Yadav";
let anotherName = myName;
anotherName = "Chai aur Code";
console.log(myName);
console.log(anotherName);

let userOne = {
  email: "abcd@gamil.com",
  upi: " cba@abl",
};

let userTwo = userOne;

userTwo.email = "nandani@google.com";

console.log(userOne.email);
console.log(userTwo.email);
