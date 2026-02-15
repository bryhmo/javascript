function outer(){
  let x = 5;
  return function(){
    console.log(x);
  };

}

const fn = outer();
x = 100;
fn();