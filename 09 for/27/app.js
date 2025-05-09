// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// согласных букв в строке. Согласные: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
// Входные: "AEIOU"
// Результат: Количество согласных: 0

const pr = prompt("enter");
const arr = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (pr.includes(arr[i])) {
    result += 1;
  }
}
console.log("Количество согласных:" + result);
