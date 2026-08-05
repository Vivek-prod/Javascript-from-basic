/*const product = {
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

console.log(JSON.stringify(product)); //js obejct to json

const jsonString = JSON.stringify(product);

console.log(JSON.parse(jsonString)); //json to js object
*/

console.log("heello".length);
console.log("hello".toUpperCase());

const object1 = {
  message: "hello",
};

const object2 = object1; //we are not copying the object we are copying teh reference

object1.message = "goodjob";
console.log(object1); //cahnged the hello to goodjob even after const thats beuse the mesage is just referene in somewhenre in pc memory and not stored in object.

console.log(object2);

const object3 = {
  message: "goodjob",
};

console.log(object3 === object1); //object 3 adn 1 have different references
console.log(object2 === object1); //object 2 and 1 have same referneces

const object4 = {
  message: "goodjob",
  price: 799,
};

//const message = object4.message;

const { message, price } = object4;
console.log(message);
console.log(price);

const object5 = {
  //message: message,
  message, //thesee both do the same work
  method: function f1() {
    console.log("method");
  },
  method() {
    console.log("method"); //gives the same result as above funciton
  },
};

console.log(object5);

object5.method();
