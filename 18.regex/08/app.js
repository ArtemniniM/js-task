// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = prompt("enter password");
const template = /[^a-zA-Zа-яА-Я]/g;
const check = () => {
  const rep = str.replaceAll(template, "");
  if (rep.length === str.length) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check();
