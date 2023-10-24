let arr = [1, 2, 3]
let newArr = arr.map((value,index,array) => {
  console.log(value,index,array);
  return index + 1;
});
console.log(newArr);
