const product = {
  name: "sock",
  price: 1000,
};

console.log(product);
console.log(product.name);

product.price = 1000;
console.log(product.price);

product.new = true;
console.log(product);

delete product.new;
console.log(product);
