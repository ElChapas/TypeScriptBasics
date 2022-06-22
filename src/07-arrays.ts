(() => {
  let prices = [123, 543, 4326, 62, 5434]; //Infiere que el array solo es de numeros
  // prices.push('12');

  let random = ['22', 123]; //Infiere que el array solo es de numeros Y strings

  let anyArray: any[] = [];
  anyArray.push(12);
  anyArray.push('hola');
  anyArray.push(false);
  anyArray.push({ a: 'world' });

  let numbers: number[] = [1, 2, 3];
  let numbers2 = numbers.map((n) => n * 2);
  numbers2;
})();
