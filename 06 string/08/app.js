const a = prompt("enter");
const num = prompt("enter");
if (!isNaN(num) && a.length >= num) {
  console.log(a[num]);
} else {
  console.log("Индекс вне диапазона");
}
!isNaN(num) && a.length >= num ? console.log(a[num]) : console.log("Индекс вне диапазона");
