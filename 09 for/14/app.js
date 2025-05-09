// Пользователь вводит натуральное число n. Напишите программу, которая печатает звездный
// прямоугольник размерами n×10 несколькими способами.
let n = +prompt("enter");
let symbols = "**********";
let result = "";
for (let i = 0; i < n; i++) {
  result += symbols;
}
console.log(result);
