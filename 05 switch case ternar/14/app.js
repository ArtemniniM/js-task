const a = +prompt("enter");
const b = +prompt("enter");
const c = +prompt("enter");
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  if (a === b && b === c && c === a) {
    console.log("Равносторонний треугольник");
  } else if (a == b || b == c || a == c) {
    console.log("Равнобедренный треугольник");
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Треугольник не существует");
  } else if (a != b && b != c && c != a) {
    console.log("Разносторонний треугольник");
  }
} else {
  console.log("error");
}
