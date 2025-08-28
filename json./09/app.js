// Сложить два числа, если оба целые.
//  Использовать: Number.isInteger, условие if
//  Примеры:
//  2 и 3 → 5
//  2.5 и 3 → ничего

let a = 2.5;
let b = 3;
if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(a + b);
}
