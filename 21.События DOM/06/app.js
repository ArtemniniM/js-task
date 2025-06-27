// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const click = document.querySelector("button");

let flag = false;
click.addEventListener("click", () => {
  const val = document.querySelector("input");
  if (flag === false) {
    val.value = "!!!";
    flag = true;
  } else {
    val.value = "???";
    flag = false;
  }
});
