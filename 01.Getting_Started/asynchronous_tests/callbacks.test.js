const { fetchData } = require("./async_functions");

//NB : The testing is done inside a callback you define and pass to the function
test("the data contains 'three'", done => {
  function callback(data) {
    try {
      expect(data).toContain("three");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
