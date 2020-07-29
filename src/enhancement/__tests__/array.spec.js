import {
  find,
  findIndex,
  keys,
  values,
  entries,
  includes1,
  includes2,
} from "../array";

test("array enhancement", () => {
  expect(find).toBe(10);
  expect(findIndex).toBe(2);
  expect(keys).toEqual([0, 1]);
  expect(values).toEqual(["a", "b"]);
  expect(entries).toEqual([
    [0, "a"],
    [1, "b"],
  ]);
  expect(includes1).toBe(true);
  expect(includes2).toBe(false);
});
