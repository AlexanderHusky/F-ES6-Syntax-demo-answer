import { obj } from "../this";

test("this bind", () => {
  const baz = { bar: 2 };
  const foo = obj.foo.bind(baz);

  expect(obj.foo()).toBe(1);
  expect(foo()).toBe(2);
});
