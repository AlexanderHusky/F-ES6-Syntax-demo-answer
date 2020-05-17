console.log("ES6+ this");

/**
 * this
 * */

// 提问的答案
// const obj = {
//   foo: function () { console.log(this.bar) },
//   bar: 1
// };

// const foo = obj.foo;
// var bar = 2;

// obj.foo()
// foo()

// 默认绑定
// function foo() {
//   console.log(this.a)
// }
// var a = 2;
// foo();

// 隐式绑定
// 即提问的答案中的 obj.foo()

// 隐式绑定丢失
// 即提问的答案中的 foo()，变成了默认绑定

// 显式绑定 call bind apply
// function foo() {
//   console.log(this.a);
// }
// let baz = {
//   a: 2,
//   foo: foo,
// };

// let jon = {
//   a: 1,
//   foo: foo,
// };

// let bar = baz.foo;
// let bazCall = bar.bind(baz);
// let jonCall = bar.bind(jon);
// bazCall();
// jonCall();

// new 构造绑定
// function Foo(a) {
//   this.a = a
// }

// var obj = new Foo(2);
// console.log(obj.a)




/**
 * Arrow Functions and 'this' in ES6
 * */

// 传参
// let f = v => v;
// let f = () => 5;
// let sum = (num1, num2) => num1 + num2;


// return
// let f = v => v;
// var sum = (num1, num2) => { return num1 + num2; }
// let getTempItem = id => ({ id: id, name: "Temp" });

// 简洁易读
// [1,2,3].map(function (x) {
//   return x * x;
// });
// [1,2,3].map(x => x * x);


// this指向
// var a = 22;
// let obj = {
//   a: 11,
//   b: () => {console.log(this.a)}
// }
// obj.b();

// 易于封装回调函数，this始终指向handler
// var handler = {
//   id: '123456',

//   init: function() {
//     document.addEventListener('click',
//       event => this.doSomething(event.type), false);
//   },

//   doSomething: function(type) {
//     console.log('Handling ' + type  + ' for ' + this.id);
//   }
// };

// arguments 对象
// let obj = {
//   a: 11,
//   b: function() {console.log(arguments)}
// }
//  obj.b(1,2,3,4)

// let obj = {
//   a: 11,
  // b: () => {console.log(arguments)}
//   b: (...rest) => {console.log(rest)}
// }
//  obj.b(1,2,3,4) 
