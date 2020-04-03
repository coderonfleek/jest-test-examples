const { fetchDataWithPromise, fetchWithError } = require("./async_functions");

test("resolve with async/await", async () => {
  const data = await fetchDataWithPromise();

  expect(data).toContain("three");
});

test("test fails with an error", async () => {
  expect.assertions(1);

  try {
    await fetchWithError();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

//Mixing async/await with .reolves and .rejects
test("the data is contains three", async () => {
  await expect(fetchDataWithPromise()).resolves.toContain("three");
});

test("this test rejects with 'error", async () => {
  await expect(fetchWithError()).rejects.toThrow("error");
});
