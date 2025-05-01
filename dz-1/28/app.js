let a = prompt("enter");
if (!isNaN(Number(a))) {
  console.log(`Тип: number`);
} else if (a === "true" || a === "false") {
  console.log(`Тип: boolean`);
} else {
  console.log(`Тип: string`);
}
