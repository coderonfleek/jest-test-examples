const data = ["one", "two", "three", "four", "five"];

function fetchData(callback) {
  setTimeout(() => {
    callback(data);
  }, 3000);
}

function fetchDataWithPromise(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    }, 3000);
  });
}

function fetchWithError(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 3000);
  });
}
module.exports = {
  data,
  fetchData,
  fetchDataWithPromise,
  fetchWithError
};
