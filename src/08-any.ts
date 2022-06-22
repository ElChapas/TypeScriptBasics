(() => {
  let myDynamicVar: any; // Esta variable puede ser cualqueir valor.
  myDynamicVar = 1;
  myDynamicVar = '2';
  myDynamicVar = false;
  myDynamicVar = {};

  myDynamicVar = 'Hola como tas'; // la variable no tiene propiedades ni metodos.

  const str = myDynamicVar as String; // Hacemos un cast a string para que nos de propiedades y metodos.
  let hello = str.split(' ');
  hello;

  myDynamicVar = 12;
  const num = <number>myDynamicVar; // Otra forma de hacer cast
})();
