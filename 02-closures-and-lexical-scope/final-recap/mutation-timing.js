function outer(){
  let x = 1;

  return {

    get:function(){
      return function(){
        console.log(x);
      };
    },
    inc:function(){
      x++;
    }
  };
}

const obj = outer();

const fn1 = obj.get();
obj.inc();
const fn2 = obj.get();
obj.inc();


fn1();
fn2();



let x = 1;

function test(){
 console.log(x);
}

x=5;

test();



console.log("A");

setTimeout(()=>{
  console.log("B");
},2000);
console.log("C");


const myPromise = new Promise((resolve,reject)=>{
  console.log("cooking food......");

  const foodReady = true

  if(foodReady){
    resolve("food is ready");
  } else{
    reject("food is burneed");
  }

});
myPromise 
      .then((result)=>{
        console.log("success",result);
      })
      .catch((error)=>{
        console.log("Error",error);
      });