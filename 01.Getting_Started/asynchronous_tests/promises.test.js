const { fetchDataWithPromise, fetchWithError } = require("./async_functions");

/* 
Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail
*/
test("Expect data to have four", () => {
  //Remember the 'return'
  return fetchDataWithPromise().then(data => {
    expect(data).toContain("four");
  });
});

test("this fetch fails with an error", () => {
  expect.assertions(1);
  return fetchWithError().catch(e => expect(e).toMatch("error"));
});

test("using .resolves", () => {
  return expect(fetchDataWithPromise()).resolves.toContain("three");
});

test("using .rejects", () => {
  return expect(fetchWithError()).rejects.toMatch("error");
});
