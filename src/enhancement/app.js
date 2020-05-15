console.log("ES6+ type enhancement");

/**
 * 数组的扩展
 * */
// find() 和 findIndex()
// let a = [1, 5, 10, 15].find(function(value, index, arr) {
//   console.log({value, index, arr})
//   return value > 9;
// })
// console.log(a)

// let b = [1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// })
// console.log(b)



// entries()，keys() 和 values()
// for (let index of ["a", "b"].keys()) {
//   console.log(index);
// }

// for (let elem of ["a", "b"].values()) {
//   console.log(elem);
// }

// for (let [index, elem] of ["a", "b"].entries()) {
//   console.log(index, elem);
// }



// includes()
// console.log([1, 2, 3].includes(2));
// console.log([1, 2, 3].includes(4));
// console.log([1, 2, NaN].includes(NaN));
// console.log([1, 2, 3].includes(3, 3));
// console.log([1, 2, 3].includes(3, -1));



/**
 * 对象的扩展
 * */
// 属性的简洁表示法
// const foo = 'bar';
// const baz = {foo};
// console.log(baz)

// function f(x, y) {
//   return {x, y};
// }
// console.log(f(1, 2))

// const o = {
//   method() {
//     return "Hello!";
//   }
// };
// console.log(o.method())

// function getPoint() {
//   const x = 1;
//   const y = 10;
//   return {x, y};
// }
// console.log(getPoint())



// for...in 遍历
// let obj =  {a: 1, b: 2, c: 3}
// for(let item in obj) {
//   console.log(obj[item])
// }



// Object.keys(obj) 遍历
// let obj =  {a: 1, b: 2, c: 3}
// console.log(Object.keys(obj))
// Object.keys(obj).forEach(item => {
//   console.log(obj[item])
// })




/**
 * 对象的新增方法
 * */

// Object.assign()
// const target = { a: 1 };
// const source1 = { b: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2);

// 后面覆盖前面的属性
// const target = { a: 1, b: 1 };
// const source1 = { b: 2, c: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2);
// console.log(target)



// Object.values()，Object.entries()
// let obj =  {a: 1, b: 2, c: 3}
// console.log(Object.values(obj))
// console.log(Object.entries(obj))



/**
 * for...of 循环
 * */
// 数组
// const arr = ['red', 'green', 'blue'];
// for(let v of arr) {
//   console.log(v); 
// }


// 对象
// let obj =  {a: 1, b: 2, c: 3}
// for (var key of Object.keys(obj)) {
//   console.log(key + ': ' + obj[key]);
// }
