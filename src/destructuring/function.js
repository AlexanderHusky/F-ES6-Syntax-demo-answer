// 一般使用
export function add([x, y]){
  return x + y;
}

// 默认值及注意
export function move({x = 0, y = 0} = {}) {
  return [x, y];
}

export function move1({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
