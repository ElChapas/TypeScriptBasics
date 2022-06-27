(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //Prametro opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const prod1 = createProductToJson('P1', new Date, 120, 'L');
  const prod2 = createProductToJsonV2('P1', new Date, 120);
  prod2
})();
