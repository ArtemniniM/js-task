// 2. Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
//     "Saturday", "Sunday"]. Вам нужно с помощью цикла for пройти по каждому элементу массива и с
//     помощью конструкции switch определить, будний это день или выходной, а затем вывести
//     соответствующую информацию на экран.
//     Входные: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] → Результат:
//     Monday - будний день
//     Tuesday - будний день
//     Wednesday - будний день
//     Thursday - будний день
//     Friday - будний день
//     Saturday - выходной день
//     Sunday - выходной день

let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case "Monday":
      console.log("будний день");
      break;
    case "Tuesday":
      console.log("будний день");
      break;
    case "Wednesday":
      console.log("будний день");
      break;
    case "Thursday":
      console.log("будний день");
      break;
    case "Friday":
      console.log("будний день");
      break;
    case "Saturday":
      console.log("выходной день");
      break;
    case "Sunday":
      console.log("выходной день");
      break;
  }
}
