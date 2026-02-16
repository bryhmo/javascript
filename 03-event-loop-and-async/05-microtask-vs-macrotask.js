console.log("1")

Promise.resolve().then(()=>{
  console.log("2");
});

setTimeout(()=>{
  console.log("3")
},0);

console.log("4");


/* 
the order of execution is
sync
microtask
macrotask

*/