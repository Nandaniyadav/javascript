const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = myNums.filter((num) => {
  return num > 3;
});
//console.log(newNums)
///////////////
let prices = [1000, 1500, 700, 500, 2000, 2500];

filterPrices = prices.filter(function (item) {
  if (item <= 1000) {
    return true;
  } else {
    return false;
  }
});
//console.log(filterPrices);

////////////////////

let courseName = ["Python", "C", "Javascript", "Java", "Ruby"];
let filterName = courseName.filter((item) => {
  if (item.length >= 5) {
    return true;
  } else {
    return false;
  }
});
console.log(filterName)
////////////////