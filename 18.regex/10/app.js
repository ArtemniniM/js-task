// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const str = prompt("enter password");
const template = /((<!--[\s\S]*? -->))/gm;
const check = () => {
  console.log(str.replaceAll(template, ""));
};
check();
