import { Product } from "./product.model";
const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
};

const calcStock = ():number => products.reduce((acc, product) => acc+product.stock, 0);

export {addProduct, calcStock, products}
