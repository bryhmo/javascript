console.log("one");

async function getUser(){
  console.log("hello world this is async and promise together");
  await Promise.resolve();
  console.log("this run as a microtask");
} 

getUser();

Promise.resolve().then(()=>{
  console.log("hello world from the other side of microtask");
});

console.log("this too will work");