import { push } from "../rest";

test("push function", () => {
  const a = [0];
  const result = push(a, 1, 2, 3);
  expect(result).toEqual([0, 1, 2, 3]);
});
