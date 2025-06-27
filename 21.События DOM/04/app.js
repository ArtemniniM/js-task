// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const click = document.querySelector("button");

click.addEventListener("click", () => {
  try {
    if (!val.value) throw new Error("error");
    if (!isNaN(val.value)) throw new Error("error");
    const val = document.querySelector("input");
    alert(val.value);
  } catch (error) {
    console.log(error.message);
  }
});
