// Замыкание. При каждом вызове добавляй переданное число к общему счётчику и выводи его.
// const add = sumTracker();
// add(2); // 👉 2
// add(5); // 👉 7

function sumTracker() {
  let count = 0;
  return function (num) {
    count += num;
    console.log(count);
  };
}

const add = sumTracker();
add(2);
add(5);
