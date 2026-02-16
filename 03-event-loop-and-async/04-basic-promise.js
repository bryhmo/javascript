console.log("start");

Promise.resolve().then(()=>{
  console.log("hello world i represented microtask");
});

console.log("End");