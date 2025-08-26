// 4. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.genderize.io/?name=... чтобы отправить GET запрос и получить от сервера
// информацию о вероятном поле (male/female) для этого имени.
const btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  try {
    const input = document.querySelector("input");
    const value = input.value;
    const response = await fetch(`https://api.genderize.io/?name=${value}`, { method: "GET" });
    const data = await response.json();

    const result = document.getElementById("result");
    result.textContent = `Имя "${value}" предполагает пол: ${data.gender} (вероятность: ${data.probability})`;
  } catch (error) {
    console.log(error.message);
  }
})();
