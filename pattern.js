//  * * * * *
//  *       *
//  *       *
//  *       *
//  * * * * *

// for (let i = 0; i < 5; i++) {
//   let star = "";
//   for (let j = 0; j < 5; j++) {
//     if ((i == 4 || j == 4) || (i==0 || j==0)) {
//       star = star + "*";
//     } else {
//       star = star + " ";
//     }
//   }
//   console.log(star);
// }
/////////////////////////////////////////////////////////

///////////not com
// let x = 5;
// let y = 5;
// let star = "";
// for (let i = 0; i < x; i++) {
//   for (let j = 0; j < y; j++) {
//     console.log(star + j);

//   }

// }

///////////////////////////////
//   *       *
//   * *   * *
//   *   *   *
//   *       *
//   *       *

for (let i = 0; i < 5; i++) {
  star  = "";
  for (let j = 0; j < 5; j++) {
    if ((j == 0 || j == 4) || (i==1 && j==1 || i==2 && j==2 || i==1 && j==3)) {
      star = star + "*";
    } else {
      star = star + " ";
    }
  }
  console.log(star);
}
