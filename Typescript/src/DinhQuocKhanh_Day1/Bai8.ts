// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
export class Product {
  constructor(public name: string, public price: number) {}
}
// Create an array of products
const products: Product[] = [
  new Product("Laptop", 1500),
  new Product("Phone", 800),
  new Product("Tablet", 300),
  new Product("Headphones", 50),
  new Product("Smartwatch", 200)

];
// Filter products with price > 100
const filteredProducts = products.filter(product => product.price > 100);
// Display filtered products
filteredProducts.forEach(product => {console.log(`Name: ${product.name}, Price: ${product.price}`);
});

