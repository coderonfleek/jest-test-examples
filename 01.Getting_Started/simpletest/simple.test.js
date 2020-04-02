const { addNumbers } = require("./simple");

test("add two numbers", () => {
  expect(addNumbers(1, 3)).toBe(4);
});
