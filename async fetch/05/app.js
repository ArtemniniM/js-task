// 5. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.nationalize.io/?name=... чтобы отправить GET-запрос и получить от сервера
// информацию о странах, с которыми это имя ассоциируется чаще всего, включая вероятность
// для каждой страны.

const btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  try {
    const input = document.querySelector("input");
    const name = input.value;
    const response = await fetch(`https://api.nationalize.io/?name=${name}`, { method: "GET" });
    const data = await response.json();

    const result = document.getElementById("result");
    const countries = data.country
      .map((c) => `${c.country_id} (вероятность: ${(c.probability * 100).toFixed(2)}%)`)
      .join(", ");
    result.textContent = `Имя "${name}" предполагает страны: ${countries}`;
  } catch (error) {
    console.log(error.message);
  }
});
