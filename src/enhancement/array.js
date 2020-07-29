/**
 * 数组的扩展
 * */
// find() 和 findIndex()
export const find = [1, 5, 10, 15].find(function (value, index, arr) {
  return value > 9;
});

export const findIndex = [1, 5, 10, 15].findIndex(function (value, index, arr) {
  return value > 9;
});

// entries()，keys() 和 values()
const keys = [];
for (let index of ["a", "b"].keys()) {
  keys.push(index);
}

const values = [];
for (let elem of ["a", "b"].values()) {
  values.push(elem);
}

const entries = [];
for (let item of ["a", "b"].entries()) {
  entries.push(item);
}

export { keys, values, entries };

// includes()
export const includes1 = [1, 2, 3].includes(2);
export const includes2 = [1, 2, 3].includes(4);
