// 普通函数
const f1 = function (v) {
  return v;
};
const f2 = function () {
  return 5;
};
const sum = function (num1, num2) {
  return num1 + num2;
};
const getTempItem = function (id) {
  return { id: id, name: "Temp" };
};

// 箭头函数
const f3 = (v) => v;
const f4 = () => 5;
const sum1 = (num1, num2) => num1 + num2;
const getTempItem1 = (id) => ({ id: id, name: "Temp" });

// 简洁
const power = [1, 2, 3].map((x) => x * x);

export { f3, f4, sum1, getTempItem1, power };
