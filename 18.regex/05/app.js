// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const str = prompt("enter");
const template = /^[a-z]+\:\/\/[a-z0-9]+\.[a-z]+\/$/;
const check = () => {
  if (template.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check();
