// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.

function simulateTask(time: number) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

simulateTask(2000).then((result) => console.log(result));
