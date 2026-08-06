/*
const arr1 = [1, 2, 3];
console.log(arr1);
console.log(arr1[1]);

arr1[1] = 10;
console.log(arr1[1]);

arr2 = [1, "23", true, { name: "hello" }, [1, 2]];

console.log(arr2[2]);

console.log(arr1.length);

arr1.push(100);
console.log(arr1);

arr1.splice(0, 2);
console.log(arr1);

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}




const todolist = ["1", "2", "3"];

for (let i = 0; i <= todolist.length; i++) { //todolist.lenght-1 will do the same
  const value = todolist[i];
  console.log(value);
}
*/

const nums = [1, 1, 3];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  sum += num;
}
console.log(sum);

const numDoubled = [];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i] * 2;
  numDoubled.push(num);
}
console.log(numDoubled);
