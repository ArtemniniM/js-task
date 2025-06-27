// На вход подается строка в виде электронной почты пользователя. Необходимо найти в
// данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить
// исключение и его обработать

const str = prompt();
function checkStr() {
  try {
    if (!str || /\d/.test(str)) throw new Error("enter nums");
    if (!str.includes("@")) throw new Error("ne include @");
    console.log(true);
  } catch (error) {
    console.log(error.message);
  }
}
checkStr();
