const n = +prompt("enter");
const yeardog2 = 10.5;
const yeardog = 4;
if (n <= 2) {
  console.log("человеческих лет", yeardog2 * n);
} else {
  console.log("человеческих лет", yeardog2 * 2 + yeardog * (n - 2));
}
