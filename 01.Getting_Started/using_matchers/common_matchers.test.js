const data = {
  id: 1,
  name: "Fikayo"
};

//toBe uses Object.is to test exact equality.
test("Test value match", () => {
  expect(2 + 3).toBe(5);
});

//toEqual recursively checks every field of an object or array.
test("Test object match", () => {
  expect(data).toEqual({ id: 1, name: "Fikayo" });
});

//Test opposite matching by adding 'not'
test("Not a match test", () => {
  expect(2 + 3).not.toBe(0);
});
