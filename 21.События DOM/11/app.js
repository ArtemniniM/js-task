// По нажатию на кнопку поменять местами значения 2 инпутов

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  let inpVal1 = "???";
  let inpVal2 = "!!!";
  input1.value = inpVal1;
  input2.value = inpVal2;
});
