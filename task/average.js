// For a given array with marks of students-> [85,97,44,37,76,60]. Find the average marks of the entire class.

let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  console.log(arr[i]);
}
let avg = sum / arr.length;
console.log(
  `sum of ${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}+${arr[4]}+${arr[5]} = `,
  sum
);
console.log(`Average of ${sum} is : `, avg);
