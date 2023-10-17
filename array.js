let arr = ["Ram", 1, 10.5, true];
// console.log(arr)
// console.log(arr[2])

                    //Array method
//Array push()   //Array length()        //Array join()    //Array toString()       //Array delete()    //Array pop()
//Array delete()  //Array concat()      //Array flat()     //Array splice()         //Array slice()
arr.push(0)
console.log(arr)
arr.push(8)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)
console.log(arr.includes(10))

const newarr = arr.slice(1,3)
console.log(newarr)
const newarr2 = arr.splice(1 ,3)
console.log(newarr2)
