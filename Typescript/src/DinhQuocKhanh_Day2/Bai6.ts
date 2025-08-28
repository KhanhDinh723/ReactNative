// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.

const myPro1 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Đinh");
});
const myPro2 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "Quốc");
});
const myPro3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Khánh");
});

Promise.all([myPro1, myPro2, myPro3]).then((x) => {
  console.log(x);
});


