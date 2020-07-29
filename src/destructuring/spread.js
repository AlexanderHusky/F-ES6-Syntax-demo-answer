// 数组的展开运算
function add(x, y) {
  return x + y;
}

// 对象的展开运算: 用于解构赋值
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

export { add, z };
