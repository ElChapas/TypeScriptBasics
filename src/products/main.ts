import { addProduct, calcStock, products } from "./product.service";

addProduct({ title: 'p1', createdAt: new Date(), stock: 12, size: 'L' });
addProduct({ title: 'p2', createdAt: new Date(), stock: 3, size: 'S' });
addProduct({ title: 'p3', createdAt: new Date(), stock: 8, size: 'XL' });

console.log(calcStock());
console.log(products);
