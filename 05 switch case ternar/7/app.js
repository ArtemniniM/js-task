const num = +prompt("enter");
// if (!isNaN(num)) {
//   if (num === 1) {
//     console.log("january");
//   } else if (num === 2) {
//     console.log("february");
//   } else if (num === 3) {
//     console.log("march");
//   } else if (num === 4) {
//     console.log("april");
//   } else if (num === 5) {
//     console.log("may");
//   } else if (num === 6) {
//     console.log("june");
//   } else if (num === 7) {
//     console.log("july");
//   } else if (num === 8) {
//     console.log("august");
//   } else if (num === 9) {
//     console.log("september");
//   } else if (num === 10) {
//     console.log("october");
//   } else if (num === 11) {
//     console.log("november");
//   } else if (num === 12) {
//     console.log("december");
//   }
// } else {
//   console.log("Вы ввели не число!");
// }
switch (num) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("error");
    break;
}
