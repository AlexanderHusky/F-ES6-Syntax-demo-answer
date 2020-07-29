import {
  frist,
  second,
  foo,
  bar,
  baz,
  third,
  firstWithSpace,
  thirdWithSpace,
} from "../array";

test("array destructuring mode", () => {
  expect(frist).toBe(1);
  expect(second).toBe(2);
  expect(foo).toBe(1);
  expect(bar).toBe(2);
  expect(baz).toBe(3);
  expect(third).toBe("baz");
  expect(firstWithSpace).toBe(1);
  expect(thirdWithSpace).toBe(3);
});
