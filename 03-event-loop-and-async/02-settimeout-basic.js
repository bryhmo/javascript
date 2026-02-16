function test(){
  console.log("run first");
}
test();
let p = new Promise((resolve,reject)=>{
  resolve("hello world i am a promise");
  reject("sorry an error has occur here");
});

p
  .then((data)=>{
    console.log("success",data);
  })

setTimeout(()=>{
  console.log("this works after timeout");
},3000);