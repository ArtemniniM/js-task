// Дан объект и переменная с названием одного из свойств. Используйте hasOwnProperty,
// чтобы проверить, существует ли это свойство в объекте.

const obj = {
  id: 1,
  name_: "Artem",
};

const prov = "name_";

console.log(obj.hasOwnProperty(prov));
