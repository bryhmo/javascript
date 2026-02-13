function outer(){
  let x =0;
  return function(){
    x++;
    let captured = x;
    return function(){
      console.log(captured);
    }
  }
}

const fn = outer();

const inner1 = fn();
const inner2 = fn();


inner1();
inner2();
