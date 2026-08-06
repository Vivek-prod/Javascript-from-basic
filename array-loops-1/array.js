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
