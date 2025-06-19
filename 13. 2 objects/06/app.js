// Дан объект и строка. Используя Object.keys(), проверьте, существует ли в объекте свойство с
// таким именем. Выведите true или false

const obj = {
  id: 1,
  name_: "Artem",
};
const array = Object.keys(obj)
const property = prompt();

const res = array.some(el=>el==property ? true : false)
console.log(res);
