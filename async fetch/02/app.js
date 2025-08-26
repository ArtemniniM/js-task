// 2. Реализовать получение всех задач fetch('https://dummyjson.com/todos'). Все элементы
// отобразить в html

async function test() {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    const todos = data.todos;

    const list = document.getElementById("todo");

    todos.forEach((el) => {
      const item = document.createElement("li");
      item.textContent = el.todo;
      list.appendChild(item);
    });
  } catch (error) {
    console.log(error.message);
  }
}
test();
