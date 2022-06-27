(() => {
  type UserID = string | number | boolean; //Creamos nuestro propio tipo
  let userId: UserID;
  let clientId: UserID;
  // Ahora podermos reutilizar el tipo en diferentes variables

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = '1' // Type '"1"' is not assignable to type '"S" | "M" | "L" | "XL"'.ts(2322)

  function greetings(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      userId.length; //En este scope myText es string
    }
  }

  greetings('hi', 'L');
})();
