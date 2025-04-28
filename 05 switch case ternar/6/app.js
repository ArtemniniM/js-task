const car1 = +prompt("enter");
const car2 = +prompt("enter");
const s = +prompt("enter");
// if (!isNaN(car1) && !isNaN(car2) && !isNaN(s)) {
//   console.log(s / (car1 + car2));
// } else {
//   console.log("error");
// }
!isNaN(car1) && !isNaN(car2) && !isNaN(s) ? console.log(s / (car1 + car2)) : console.log("error");
