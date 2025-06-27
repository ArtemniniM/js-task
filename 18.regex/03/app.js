// На вход подается строка из 2 и более слов. Необходимо все символы пробела
// заменить на пустую строку.

const str = prompt("enter str");

function checkStr(str) {
  console.log(str.replaceAll(/ /g, ""));
}

checkStr(str);
