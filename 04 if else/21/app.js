const a = +prompt("enter");
const b = +prompt("enter");
const c = +prompt("enter");

if (a === 0) {
  console.log("a не должно быть равно 0");
} else {
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    const x1 = ((-b + Math.sqrt(D)) / 2) * a;
    const x2 = ((-b - Math.sqrt(D)) / 2) * a;
    console.log(
      "Корни уравнения:",
      [x1, x2].sort((x, y) => x - y)
    );
  } else if (D === 0) {
    const x = -b / (2 * a);
    console.log("Уравнение имеет один корень:", x);
  } else {
    console.log("не имеет действительных корней");
  }
}
