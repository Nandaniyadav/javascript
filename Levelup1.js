// impiliment a higher order function that takes an array of people objects (each containing a name and age )and returns the average age of all people.
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "John", age: 20 },
//   { name: "Jane", age: 35 },
// ];

let arr = [25, 30, 20, 35];
let sum = 0;
let count = 0;
for (i = 0; i <= arr.length - 1; i++) {
  sum = sum + arr[i];
  count++;
}
//console.log(sum );
//console.log(count );
console.log(sum / count);

