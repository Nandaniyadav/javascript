let arr = [1, 2, 3]
let newArr = arr.map((value,index,array) => {
  console.log(value,index,array);
  return value + 1;
//   return value + index;
});
console.log(newArr);
