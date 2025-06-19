// Проверьте, все ли элементы массива ["HTML", "CSS", "JavaScript"] длиннее 3 символов (используйте every).

const arr = ["HTML", "CSS", "JavaScript"];

const res = arr.every((el) => el.length > 3);
console.log(res);
