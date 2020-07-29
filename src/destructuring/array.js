// 匹配模式
let [frist, second] = [1, 2];
let [foo, [[bar], baz]] = [1, [[2], 3]];

let [, , third] = ["foo", "bar", "baz"];

let [firstWithSpace, , thirdWithSpace] = [1, 2, 3];

export { frist, second, foo, bar, baz, third, firstWithSpace, thirdWithSpace };
