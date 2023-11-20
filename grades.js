// write a code which can give grades to students according to their scores:

let scores = 40;
if (scores >= 90 && scores <= 100) {
  console.log(`${scores} Number is A grade`);
} else if (scores >= 70 && scores <= 89) {
  console.log(`${scores} Number is B grade`);
} else if (scores >= 60 && scores <= 69) {
  console.log(`${scores} Number is C grade`);
} else if (scores >= 50 && scores <= 59) {
  console.log(`${scores} Number is D grade`);
} else if(scores >= 0 && scores <=49){
  console.log(`${scores} Number is Fail`);
}
