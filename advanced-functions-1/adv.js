/*function greeting() {
  console.log("hello");
}

greeting();

const num = 2;

const function1 = function () {
  console.log("heelo2");
}; //anonymus function

console.log(function1);

console.log(typeof function1);

//we can save a function inside a variable

function1();

const o1 = {
  num: 2,
  fun: function () {
    console.log("hello");
  },
};

o1.fun();

function display(param) {
  console.log(param);
}

display(2);

function run(param) {
  param();
}

run(function () {
  console.log("hello4");
});



//function are value we can do same as we do with value



setTimeout(function () {
  console.log("timeout");
  console.log("timeout2");
}, 3000); //1000milisecond=1sec

console.log("next line");

setInterval(function () {
  console.log("interval");
}, 3000);
*/

const a = [1, 2, 3];

a.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});
