// 2. Write a function that returns
//a Promise resolving with the number 10 after 1 second.

let Bai2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is number 10 after 1s");
  }, 1000);
});

Bai2.then((rs) => {
  console.log("Resolve: ", rs);
});
