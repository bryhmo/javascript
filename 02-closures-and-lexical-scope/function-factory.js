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


// this is an example of function factory