console.log("1");
setTimeout(()=>{
  console.log("2");
  Promise.resolve().then(()=>{
    console.log("3");
  })
},0);

async function test(){
  console.log("4");
  await Promise.resolve();
  console.log("5");
}

test();

Promise.resolve().then(()=>console.log("6"));

console.log("7");