(() => {
  let myProductName: string = 'Laptop';
  let myProductPrice: number = 300;

  // myProductName = 12; //Type 'number' is not assignable to type 'string'.
  myProductName.toLowerCase;

  const myProductStock = 100;
  //myProductStock = 12; //Cannot assign to 'myProductStock' because it is a constant.

  let arr: number[] = [1, 2, 3];
  const arr2 = arr;
  arr.push(1);
  console.log(arr2);
  // Bueno, esperaba que me marcara alguna advertencia al respecto a la referencia en memoria.
  // Lo bueno que estamos concientes de esto.
})()
