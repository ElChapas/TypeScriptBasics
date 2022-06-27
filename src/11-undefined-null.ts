(() => {
  // let myNumber: number;
  // let myString: string;

  let myNull = null; //any
  let myUndefined = undefined; //any

  let myNull2: null = null; //null
  let myUndefined2: undefined = undefined; //undefined

  let myNumber: number | null;
  let myString: string | undefined;

  function hi(name: string | null) {
    let hello = 'Hello ';
    // if (name) {
    //   hello + name;
    // } else {
    //   hello + 'nobody';
    // }
    return (hello += name || 'nobody'); // Optional Chaining
  }
  function hi2(name: Function | null) {
    name?.() || 'error';
  }

  function test() {
    return 'my name is Malcom';
  }

  console.log(hi('Malcom'));
  console.log(hi2(test));
  console.log(hi2(null));
})();
