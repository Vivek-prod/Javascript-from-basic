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
*/

const a1 = [1, 2, 3];
const a2 = a1.slice();
a2.push(4);
console.log(a2);
console.log(a1);

const [firstvalue, secondvalue, thirdvalue] = [1, 2, 3];

console.log(typeof firstvalue);

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue; //skip divisible by 3
  }
  console.log(i);
  if (i === 8) {
    break; //stop at 8
  }
}

let i = 1;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

function doublearray(nums) {
  const numDoubled = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] * 2;
    if (num === 0) {
      // break
      return numDoubled;
    }
    numDoubled.push(num);
  }
  return numDoubled;
}

console.log(doublearray([1, 2, 3, 0, 6]));
