(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (user: { email: string; password: string }) => {
    console.log('Welcome ' + user.email);
  };

  login({ email: 'Hello@gmail.com', password: '123' });

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({title: 'p1',createdAt: new Date(), stock:12, size: 'L'});
})();
