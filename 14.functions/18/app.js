// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”.

function doRes() {
  let str = "xx/xx/xxxx";

  let res = str.replaceAll("/", "-").split("").reverse().join("");
  return res;
}
console.log(doRes());
