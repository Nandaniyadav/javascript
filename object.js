const mySymbol = Symbol("key1")

const jsUser = {
  "full-name": "Nandani Yadav",
  age: 19,
  email: "nandani@google.com",
  location: "Lucknow",
  [mySymbol]: "mykey1",
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full-name"]);
console.log(jsUser[mySymbol]);

      //for change value
jsUser.email = "nandani@facebook.com"
console.log(jsUser.email)
