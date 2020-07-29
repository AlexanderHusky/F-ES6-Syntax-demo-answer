import { add, z } from "../spread";

describe("spread", () => {
  it("array spread", () => {
    expect(add(...[1, 2])).toBe(3);
  });

  it("object spread", () => {
    expect(z).toEqual({ a: 3, b: 4 });
  });
});
