// For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [1, 2, 3, 4, 5];
// nums.forEach((nums) => {
//   //   console.log(nums * nums);
//   console.log(`Square of ${nums} is ${nums}*${nums} = ${nums ** 2}`);
// });

///////////////////////////

let nums = [5, 6, 7, 8];
for (let i = 0; i < nums.length; i++) {
  console.log(`Square of ${nums[i]} is ${nums[i]}*${nums[i]} = ${nums[i]*nums[i]}` );
}
