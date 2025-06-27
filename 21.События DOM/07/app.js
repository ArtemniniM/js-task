// Записать в результат удвоенное значение инпута. Добавить проверки

const click = document.querySelector("button");

click.addEventListener("click", () => {
  try {
    const val = document.querySelector("input");
    if (isNaN(val.value)) throw new Error("error");
    const res = document.querySelector("p");
    res.textContent = "результат:" + " " + val.value * 2;
  } catch (error) {
    console.log(error.message);
  }
});
