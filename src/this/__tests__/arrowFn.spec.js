import { f3, f4, sum1, getTempItem1, power } from "../arrowFn";

test("arrow function", () => {
  expect(f3(1)).toBe(1);
  expect(f4(1)).toBe(5);
  expect(sum1(1, 2)).toBe(3);
  expect(getTempItem1("id")).toEqual({ id: "id", name: "Temp" });
  expect(power).toEqual([1, 4, 9]);
});
