//Проверка, что строка начинается с заглавной буквы

const str = prompt("enter");
const template = /^[A-ZА-Я]/;
const check = () => {
  if (template.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check();
