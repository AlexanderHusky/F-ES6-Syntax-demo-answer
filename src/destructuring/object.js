// 解构和解构与顺序无关
const { foo, bar } = { foo: "aaa", bar: "bbb" };
const { bar1, foo1 } = { foo1: "aaa", bar1: "bbb" };
const { baz } = { foo: "aaa", bar: "bbb" };

export { foo, bar, bar1, foo1, baz };
