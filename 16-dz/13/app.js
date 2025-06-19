// У тебя есть объект utils с методом show, который выводит значение поля data из своего объекта.
// Создай второй объект item, у которого есть поле data.
// Вызови метод show от имени объекта item, используя call, чтобы он вывел item.data.

const utils = {
  show() {
    console.log(this.data);
  },
};
const item = {
  data: "12.03",
};

utils.show.call(item);
