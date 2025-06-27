// *Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция
// должна возвращать true, если можно построить треугольник со сторонами заданной длины,
// и false в любом другом случае.
// Треугольник существует только тогда, когда сумма двух его сторон больше третьей.
// Требуется сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с такими
// сторонами не существует.

let a = +prompt();
let b = +prompt();
let c = +prompt();

function checkTriangle(a, b, c) {
  try {
    if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("enter string");
    if (a <= 0 || b <= 0 || c <= 0) throw new Error("values no correct");

    if (a + b <= c || a + c <= b || b + c <= a) throw new Error("unreal triangle");
    console.log(true);
  } catch (error) {
    console.log(error.message);
  }
}
checkTriangle(a, b, c);
