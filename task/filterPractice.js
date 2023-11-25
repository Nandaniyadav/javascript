// We are given of marks of students. Filter out of the marks of students that scored 90 +.

let studMarks = [80, 90, 94, 67, 92, 95];
topmarks = studMarks.filter((val) => {
  return(val > 90);
});
console.log(topmarks);
