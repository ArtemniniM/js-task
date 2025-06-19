// Вызови функцию от имени другого объекта с call

function show() {
  console.log(`hi,${this.name}`);
}
const obj = { name: "Artem" };

show.call(obj);
