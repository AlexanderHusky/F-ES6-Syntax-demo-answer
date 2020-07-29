import { baz, o, getPoint, forIn, objectKeys, assign, target } from "../object";

test("array enhancement", () => {
  expect(baz).toEqual({ foo: "bar" });
  expect(o.method()).toBe("Hello!");
  expect(getPoint()).toEqual({ x: 1, y: 10 });
  expect(forIn).toEqual(["a", "b", "c"]);
  expect(objectKeys).toEqual(["a", "b", "c"]);
});

test("array function", () => {
  expect(assign).toEqual({ a: 1, b: 2, c: 3 });
  expect(target).toEqual({ a: 1, b: 2, c: 3 });
});
