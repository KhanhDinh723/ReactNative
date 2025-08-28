//1. Create a Promise that returns the string
//"Hello Async" after 2 seconds.

let Bai1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 3000);
});

Bai1.then((rs) => {
  console.log("Reject: ", rs);
});
// Chi goi 1 cai thoi neu no thanh cong
// .catch((rj) => {
//   console.log("Reject:", rj);
// });
