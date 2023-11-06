// function sum(x, y) {
//   return x + y;
// }
// result = sum(2, 2,);
// //console.log(result);

/////////calculater

function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function calculaterfunction(fn, x, y) {
  return fn(x, y);
}
console.log("Sum is :", calculaterfunction(sum, 2, 2));
console.log("Subtract is", calculaterfunction(subtract, 5, 3));
console.log("Multiply is :", calculaterfunction(multi, 2, 4));
console.log("Divide is :", calculaterfunction(divide, 6, 4));
