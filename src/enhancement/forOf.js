// 数组
const arr = ["red", "green", "blue"];
const array1 = [];
for (let v of arr) {
  array1.push(v);
}

// 对象
let obj = { a: 1, b: 2, c: 3 };
const array2 = [];
for (let key of Object.keys(obj)) {
  array2.push(obj[key]);
}

export { array1, array2 };
