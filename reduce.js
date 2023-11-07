// var obj = {
//   msg: "Susbribe my channel",
//   printmsg: function(){
//     console.log(this.msg);
//   }
// };
// console.log(obj.msg)

let price = [500, 1000, 7000, 300];
let newPrice = price.reduce(function (acc, item) {
  result = acc + item;
  return result;
},0);
console.log(result);
