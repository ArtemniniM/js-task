// Проверка, что строка — валидная дата формата YYYY-MM-DD
// "2025-06-20" - true
// "20-06-2025" - false

const str = prompt("enter");
const template = /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;
const check = () => {
  if (template.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check();
