// Вырезать все хэштеги из строки "I love #JavaScript and #regex!";
//  "I love #JavaScript and #regex!" -  "I love and !"

let str = prompt("enter num");
const template = /#\S+/g ;
const check = () => {
  console.log(str.replaceAll(template, ""));
};
check();
