//If you want to test that a particular function throws an error when it's called, use toThrow

function compileAndroidCode() {
  throw new Error("you are using the wrong SDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  //You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong SDK");
  expect(compileAndroidCode).toThrow(/SDK/);
});
