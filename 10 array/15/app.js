// Преобразуйте первую букву каждого слова в строке в верхний регистр используя цикл for.
// Входные: "hello" → Результат: "Hello"
// Входные: "hello world" → Результат: "Hello World"
// Входные: "javascript language" → Результат: "Javascript Language“

let pr = prompt("enter");
let sl = pr[i].slice(1);
let result = "";
for (let i = 0; i < pr.length; i++) {
  console.log(pr[i][0] + sl);
}
