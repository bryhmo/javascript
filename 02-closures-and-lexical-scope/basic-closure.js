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


function multiplyBy(x){

  return function(y){

    // console.log(x * y);
    return x * y;

  }
}

const double = multiplyBy(2);
const tripple = multiplyBy(3);


console.log(double(5) );
console.log(tripple(5));


