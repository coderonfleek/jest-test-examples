//You can check if an array or iterable contains a particular item using toContain
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

test("this shopping list has kleenex in it", () => {
  expect(shoppingList).toContain("kleenex");
  expect(new Set(shoppinhList)).toContain("kleenex");
});
