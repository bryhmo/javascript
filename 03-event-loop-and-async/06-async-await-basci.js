console.log("test1");

async function test(){
  console.log("test2");
  await Promise.resolve();
  console.log("test3 runs after the await");
}

test();

console.log("test4");