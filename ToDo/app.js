const list = document.getElementById("todo-list");
const input = document.getElementById("todo-input");

async function test() {
  const response = await fetch("https://dummyjson.com/todos", { method: "GET" });
  const json = await response.json();
  console.log(json);

  json.todos.forEach((el) => {
    const ul = document.querySelector("#todo-list");
    ul.innerHTML += `<li>${el.todo} <button onclick = "test2(${el.id},event)">Delete</button></li>`;
  });
}
test();

document.querySelector("button").addEventListener("click", async function () {
  const input = document.getElementById("todo-input").value;
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input,
      completed: false,
      userId: 5,
    }),
  });
  const json = await response.json();
  const ul = document.querySelector("#todo-list");
  ul.innerHTML += `<li>${input} <button>Delete</button></li>`;
  console.log(json);
});

async function test2(id, event) {
  await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  });
  event.target.parentNode.style = "display:none";
}
