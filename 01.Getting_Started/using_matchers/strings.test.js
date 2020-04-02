//You can check strings against regular expressions with toMatch

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "fik" in fikayo', () => {
  expect("fikayo").toMatch(/fik/);
});
