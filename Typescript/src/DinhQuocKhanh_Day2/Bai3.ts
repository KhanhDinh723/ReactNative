//3. Write a function that rejects a Promise
//with the error "Something went wrong" after 1 second.

//Knowledge
// use _ for not use that value
//reject run when the value is failure
// reject(new Error("Something went wrong")); // ✅ best practice
// reject("Something went wrong"); //  works, but less informative

const Bai3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Something when wrong"));
  }, 1000);
});

Bai3.then((_) => {
  console.log("There are nothing here");
}).catch((rj) => {
  console.log(rj);
});
