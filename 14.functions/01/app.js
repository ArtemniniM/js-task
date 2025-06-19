// Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида
// «Привет, {имя} {фамилия}»

function doName(name, surname) {
  const pre = `Привет, ${name} ${surname}`;
  return pre;
}
const res = doName(prompt(), prompt());
console.log(res);
