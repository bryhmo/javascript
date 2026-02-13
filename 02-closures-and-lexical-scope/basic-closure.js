function outer(){
  let count = 0;
  function inner(){
    count+=2;
    console.log(count);
  }

  return inner;
}

let counter = outer();

counter();
counter();
counter();



// closure with the secret variable 
function privateVariable(secret){
  return function(){
    console.log(secret);
  }
}

const secretVar = privateVariable("Becoming Scary with javascript");
secretVar();
secretVar();


