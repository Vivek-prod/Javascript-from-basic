const product = {
  name: "sock",
  price: 1000,
  ["hello-world"]: 100,
  rating: {
    stars: 4.5,
    count: 50,
  },
  fun: function function1() {
    console.log("function inside an object");
  },
};

console.log(product);
console.log(product.name);

product.price = 1000;
console.log(product.price);

product.new = true;
console.log(product);

delete product.new;

console.log(product);

console.log(product["name"]);

console.log(product["hello-world"]);

console.log(product.rating.stars);

product.fun();

console.log(typeof console.log);
