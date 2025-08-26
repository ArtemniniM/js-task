// 8. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://official-joke-api.appspot.com/random_joke, получала от сервера случайную шутку в
// формате JSON и отображала её на странице в удобочитаемом виде.

const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke", { method: "GET" });
    const data = await response.json();
    const ul = document.querySelector("ul");
    const setup = document.createElement("li");
    const punchline = document.createElement("li");
    setup.textContent = data.setup;
    punchline.textContent = data.punchline;
    ul.appendChild(setup);
    ul.appendChild(punchline);
  } catch (error) {
    console.log(error.message);
  }
});
