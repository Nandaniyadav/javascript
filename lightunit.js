// var unit = 50;
// var bill = 0;
// if(unit <= 20)
// {
//     bill = (unit * 10);
//        //200
// }
// else if(unit <= 30)
// {
//     bill = (20*10) + (unit - 10) * 12;   // 200+(30-20)*12=200+120=320
// }
// else if(unit <= 50)
// {
//     bill = (20*10)+(12*10)+(unit-30)*15   //200+120 +(50-30)*15 =  320+(20*15)= 620
// }
// console.log("total bill : ",bill)


var unit = 25;
var bill = 0;
var restunit = 0;
var restunit1 = 0;
if(unit <= 50)
{

    restunit -= unit - 30;
    bill += restunit * 15 + 320;
    console.log(restunit);
       
}
else if(unit <= 30)
{
    restunit1 -= unit-20;
    bill += restunit1 * 12 + 200;
    console.log(restunit1);
}
else if(unit <= 20)
{
    bill += unit*10;
}
console.log("total bill : ",bill)



