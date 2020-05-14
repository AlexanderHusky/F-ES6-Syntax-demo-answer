// 数据类型 undefined和null
(function () {
  let undefined = 1;
  // let null = 1
  console.log(undefined);
})();

// ES6新增语法（声明）
/**块作用域let 和 for 组合用法
 * */
// {
//   let isLet = 'let'
//   const isConst = 'const'
//   var isVar = 'vat'
// }

// console.log(isLet)
// console.log(isConst)
// console.log(isVar)

/**
 * let 和 for 组合用法
 * */
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]();

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]();

// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }

/**
 * 不存在变量提升
 * */
// console.log(foo); // 输出undefined
// var foo = 2;

// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// // const 的情况
// console.log(baz); // 报错ReferenceError
// const baz = 2;

/**
 * 不能重复声明
 * */
// var a = 1
// let a = 1
// let a = 1
// const a = 1
// const a = 1
// var a = 1

/**
 * 常量声明与变量声明
 * */
// const a = "a";
// let b = "b";
// b = "c";
// a = "d";
