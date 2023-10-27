// let arr = [1, 2, 3]
// let newArr = arr.map((value,index,array) => {
//   //console.log(value,index,array);
//   console.log(value);
//   return value + 1;
// //   return value + index;
// });
// console.log(newArr);
/////
// const myNums = [1, 2, 3, 4, 5, 6];
// // const newNums = myNums.map((num)=> num + 2)
// const newNums = myNums.map((num) => {
//   return num + 2;
// });
// console.log(newNums);

/////
//chaining in map() method
const myArr = [1, 2, 3, 4, 5, 6, 7];

const myNewArr = myArr
                       .map((num) => num * 10)
                       .map((num) => num + 1)
                       .map((num)=>  num - 2)
                      //  .map((num)=>  num / 2);
console.log(myNewArr);
