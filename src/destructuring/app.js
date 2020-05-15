console.log("ES6+ destructuring");

/**
 * 数组的解构 注意解构是一种匹配模式，符合即可解构
 * */

// 匹配模式
// let [x, y] = [1,2]
// debugger
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo)
// console.log(bar)
// console.log(baz)

// let [ , , third] = ["foo", "bar", "baz"];
// debugger

// let [x, , y] = [1, 2, 3];
// debugger



// 解构不成功的值
// let [foo] = [];
// let [bar, foo] = [1];
// console.log(foo)



// 不完全解构
// let [x, y] = [1, 2, 3];
// console.log(x);
// console.log(y);
// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a);
// console.log(b);
// console.log(d);



// 错误使用
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};



/**
 * 数组的解构的默认值
 * */
// 默认值的使用
// let [foo = true] = [];
// debugger;

// let [x, y = "b"] = ["a"];
// let [x, y = "b"] = ["a", undefined];
// debugger;



// 当一个数组成员严格等于undefined，默认值才会生效
// let [x = 1] = [undefined];
// debugger

// let [y = 1] = [null];
// debugger



// 默认值可以为变量，但必须要先声明
// let [x = 1, y = x] = [];
// let [x = 1, y = x] = [2];
// let [x = 1, y = x] = [1, 2];
// let [x = y, y = 1] = [];
// debugger





/**
 * 对象的解构
 * */
// 解构和解构与顺序无关
// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// let { baz } = { foo: "aaa", bar: "bbb" };
// debugger;



// 变量名和属性名不一致但解构赋值
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// debugger



// 嵌套关系的解构赋值
// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };

// let { p, p: [x, { y }] } = obj;

// const node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };

// let { loc, loc: { start }, loc: { start: { line }} } = node;
// debugger



// 报错
// let {foo: {bar}} = {baz: 'baz'};

// 默认值
// var {x = 3} = {};
// var {x, y = 5} = {x: 1};
// var {x: y = 3} = {};
// var {x: y = 3} = {x: 5};
// var { message: msg = 'Something went wrong' } = {};
// var {x = 3} = {x: undefined};
// var {x = 3} = {x: null};
// debugger



//注意点1: 不要使用已经声明的变量用于解构赋值
// let x;
// {x} = {x: 1};
// ({x} = {x: 1});
//注意点2: 数组本质是特殊的对象，因此可以对数组进行对象属性的解构
// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;
// debugger



/**
 * 函数的解构
 * */
// 一般使用
// function add([x, y]){
//   return x + y;
// }
// console.log(add([1, 2]))


// 默认值及注意
// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }
// console.log(move({x: 3, y: 8}))
// move({x: 3, y: 8}); 
// move({x: 3}); 
// move({}); 
// move(); 

// function move({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(move({x: 3, y: 8}))
// move({x: 3, y: 8}); 
// move({x: 3}); 
// move({}); 
// move(); 

/**
 * 展开（收集）运算 spread/rest
 * */

// 收集参数
// function push(array, ...items) {
//   items.forEach(function(item) {
//     array.push(item);
//     console.log(item);
//   });
// }

// var a = [0];
// push(a, 1, 2, 3)
// console.log(a)



// 收集参数后面不能再有参数
// function f(a, ...b, c) {}



// 数组的展开运算
// function add(x, y) {
//   return x + y;
// }

// const numbers = [4, 38];
// console.log(add(...numbers))


// 灵活使用
// function f(v, w, x, y, z) { }
// const args = [0, 1];
// f(-1, ...args, 2, ...[3]);


// 数组定义
// console.log([1,...[1,2,3], 3 ,...[4]])
// let x = 1;
// console.log([
//   ...(x > 0 ? ['a'] : []),
//   'b',
// ])


// 对象的展开运算: 用于解构赋值
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(z)



// 对象的展开运算: 拷贝可遍历属性
// let z = { a: 3, b: 4 };
// let n = { ...z };
// debugger



// 对象的展开运算: 对象合并
// let a = {x:1}
// let b = {y:2}
// let ab = { ...a, ...b };
// console.log(ab)
// 等同于
// let ab = Object.assign({}, a, b);



/**
 * 常见用法
 * */
// 交换变量的值
// let x = 1;
// let y = 2;
// [x, y] = [y, x];


// 从函数返回多个值
// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();
// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();



// 函数参数的定义
// function f([x, y, z]) {  }
// f([1, 2, 3]);
// function f({x, y, z}) {  }
// f({z: 3, y: 2, x: 1});



// 提取 JSON 数据
// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);



// 函数参数的默认值
// function fn (url, {
//   async = true,
//   beforeSend = function () {},
//   cache = true,
//   complete = function () {},
//   crossDomain = false,
//   global = true,
//   // ... more config
// } = {}) {
//   // ... do stuff
// };



// 遍历 Map 结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }



// 输入模块的指定方法
// const { dirname, basename } = require("path");
// import { dirname, basename } from 'path'
