import { array1, array2 } from "../forOf";

describe("for of", () => {
  it("for of in array", () => {
    expect(array1).toEqual(["red", "green", "blue"]);
  });

  it("for of in object", () => {
    expect(array2).toEqual([1, 2, 3]);
  });
});
