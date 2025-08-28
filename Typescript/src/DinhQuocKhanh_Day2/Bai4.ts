//4. Use .then() and .catch() to handle a Promise
//that returns a random number.

//knowledge
//Use for when you need full control (skip, break, custom step).
//Use for...of when you just need to loop values (simplest).
//Use forEach when you want functional style and don’t need to break early.
//////////////////////////
// Phat sinh mang ngau nhien va xuat mang ngau nhien
// export const arrNum = [
// math.for ex :console.log(Math.floor(4.9));   // 4
// Math.floor(32.754578532),
// Math.random(), 0.09468468727543233

// Math.floor(Math.random() * 100),
// Math.floor(Math.random() * 100),
// Math.floor(Math.random() * 100),
// Math.floor(Math.random() * 100),
// ];

//   let count = 1;
//   for (const i of arrNum) {
//     console.log(`number ${count}: `, i);
//     count++;
//  }
//   for (let i = 0; i < arrNum.length; i++) {
//     const element = arrNum[i];
//     console.log(i + 1, ":", element);
//   }
// });
////////////////////////
const Bai4 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 100);
  console.log(num);
  if (num % 2 === 0) {
    resolve(`${num} :This is Even number!`);
  } else {
    reject(new Error(`${num} :This is Odd number!`));
  }
});

Bai4.then((rs) => {
  console.log("Successfully:", rs);
}).catch((rj) => {
  console.log("Failure: ", rj);
});
