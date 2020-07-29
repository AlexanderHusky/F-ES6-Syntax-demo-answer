import { foo, bar, bar1, foo1, baz } from "../object";

test("object destructuring mode", () => {
  expect(foo).toBe("aaa");
  expect(bar).toBe("bbb");
  expect(foo1).toBe("aaa");
  expect(bar1).toBe("bbb");
  expect(baz).toBe(undefined);
});
