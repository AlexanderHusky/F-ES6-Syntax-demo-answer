const obj = {
  foo: function () {
    return this.bar;
  },
  bar: 1,
};

export { obj };
