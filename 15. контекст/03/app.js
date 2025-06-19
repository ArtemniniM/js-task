// Объект с orderId и status, метод printStatus, выводит: "Заказ <orderId>: <status>"

const order = {
  orderId: 154,
  status: "ready",
  printStatus() {
    console.log(`Заказ ${this.orderId}:${this.status}`);
  },
};
order.printStatus();
