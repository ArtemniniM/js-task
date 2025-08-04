const input = document.querySelector("#newTodo");
const btn = document.querySelector("button");
const ul = document.querySelector("#todoList");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("dblclick", () => {
    li.remove();
  });
});
