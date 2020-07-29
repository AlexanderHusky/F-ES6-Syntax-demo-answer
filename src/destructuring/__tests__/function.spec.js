import { add, move, move1 } from "../function";

describe("function destructuring mode", () => {
  it("should add destructuring working", () => {
    expect(add([1, 2])).toBe(3);
  });

  it("should move destructuring working", () => {
    expect(move({ x: 3, y: 8 })).toEqual([3, 8]);
    expect(move({ x: 3 })).toEqual([3, 0]);
    expect(move({})).toEqual([0, 0]);
    expect(move()).toEqual([0, 0]);
  });

  it("should move1 destructuring working", () => {
    expect(move1({ x: 3, y: 8 })).toEqual([3, 8]);
    expect(move1({ x: 3 })).toEqual([3, undefined]);
    expect(move1({})).toEqual([undefined, undefined]);
    expect(move1()).toEqual([0, 0]);
  });
});
