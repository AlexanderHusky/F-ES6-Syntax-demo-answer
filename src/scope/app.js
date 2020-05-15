console.log("ES6+ scope");

/**
 * 函数作用域与全局作用域
 * */

// 运行中的作用域
// let a = 10;
// let b = 20
// debugger;

// function fn(x) {
//   var a = 100,
//       c = 300;
//       debugger

//   function bar(x) {
//     var a = 1000,
//         d = 4000;
//         debugger;
//   }
//   debugger;
//   bar(100)
//   bar(200)
// }
// debugger;
// fn(10)



/**
 * 块级作用域
 * */

// 内层变量覆盖外层变量
// var tmp = 'hello';

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//   }
// }

// f();



//循环变量泄漏为全局变量
// var s = 'hello';

// 无块级作用域
// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }
// 有块级作用域
// for (let i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i);



// 块级作用域可以任意嵌套且相互隔离
// {
//   {
//     {
//       {
//         const insane = "Hello";
//         {
//           let insane = "Hello World";
//         }
//       }
//       console.log(insane); 
//     }
//   }
// }
