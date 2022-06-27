(() => {
  let userId: string | number;
  userId = 12;
  userId = 'zhj3ld34j';

  function greetings(myText: string | number) {
    if (typeof myText === 'string') {
      myText.length; //En este scope myText es string
    } else {
      myText.toFixed; //En este scope myText es number
    }
  }
  greetings('dj7f');
  greetings(23);
})();

// Los union types te dan una flexibilidad al momento de trabajar con valores de tipo mixto.

