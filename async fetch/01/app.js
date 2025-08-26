// 1. Реализовать получение всех задач fetch('https://dummyjson.com/todos')

async function test() {
  try {
    const response = await fetch("https://dummyjson.com/todos", { method: "GET" });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
test();
