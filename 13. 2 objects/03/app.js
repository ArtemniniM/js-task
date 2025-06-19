// Дан объект с информацией о товарах (например, { product1: 10, product2: 5, product3: 8 }).
// Используя Object.values(), посчитайте общее количество товаров.

const obj = { product1: 10, product2: 5, product3: 8 };

const res = Object.values(obj).reduce((sum,el)=>sum+=el,0)

console.log(res);
