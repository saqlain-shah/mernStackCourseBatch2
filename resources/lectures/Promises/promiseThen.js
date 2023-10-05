const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result");
  }, 200);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);
