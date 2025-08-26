// 10. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем название страны, отправляла GET-запрос по ссылке
// http://universities.hipolabs.com/search?country=... и отображала на странице список
// университетов с их названиями и веб-сайтами.

const btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  try {
    const input = document.querySelector("input");
    const value = input.value;
    const response = await fetch(`http://universities.hipolabs.com/search?country=${value}`, { method: "GET" });
    const data = await response.json();
    const ul = document.querySelector("ul");
    data.forEach((el) => {
      const name = document.createElement("li");
      const web = document.createElement("li");
      name.textContent = el.name;
      web.textContent = el.web_pages.join("");
      ul.appendChild(name);
      ul.appendChild(web);
    });
  } catch (error) {
    console.log(error.message);
  }
});
