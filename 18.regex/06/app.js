// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const str = "C:UsersAdminDesktop\test.txt";
const template = /^C:\\\w+\\\w+\\\w+\\\w+\.\w+$/;
const check = () => {
  if (template.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check();
