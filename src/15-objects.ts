(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }

  const login = (user: { email: string; password: string }) => {
    console.log('Welcome ' + user.email);
  };

  login({ email: 'Hello@gmail.com', password: '123' });

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({ title: 'p1', createdAt: new Date(), stock: 12, size: 'L' });
})();
