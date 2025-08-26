// 3. Реализовать получение фактов про котов fetch('https://catfact.ninja/fact) и результат отобразить
// в <p>

async function test() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const p = document.querySelector("p");
    p.textContent = data.fact;
  } catch (error) {
    console.log(error.message);
  }
}
test();
