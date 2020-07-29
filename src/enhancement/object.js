// 属性的简洁表示法
const foo = "bar";
const baz = { foo };

const o = {
  method() {
    return "Hello!";
  },
};

function getPoint() {
  const x = 1;
  const y = 10;
  return { x, y };
}

// for...in 遍历
const obj = { a: 1, b: 2, c: 3 };
const forIn = [];
for (let item in obj) {
  forIn.push(item);
}

// Object.keys(obj) 遍历
const obj1 = { a: 1, b: 2, c: 3 };
const objectKeys = [];
Object.keys(obj1).forEach((item) => {
  objectKeys.push(item);
});

export { baz, o, getPoint, forIn, objectKeys };

/**
 * 对象的新增方法
 * */

// Object.assign()
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const assign = Object.assign(target, source1, source2);

// 后面覆盖前面的属性
const target1 = { a: 1, b: 1 };
const source3 = { b: 2, c: 2 };
const source4 = { c: 3 };
export { assign, target };
