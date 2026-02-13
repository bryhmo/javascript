function outer(){
  let x = 10;
  return {
    increment: function(){
      x++;
      console.log(x);
    },
    get: function(){
      console.log(x);
    }
  };
}

const obj = outer();

obj.get();
obj.increment();
obj.increment();
obj.get();



function outer1(){
  let x = 0;
  return {
     inner1 : function(){
      x++;
      console.log(x);
     },
    inner2: function(){
      console.log(x);
    }
  };

  };
  


const fn = outer1();

fn.inner1();
fn.inner2();
fn.inner1();



function outerr(){
    let x = 0;
    function innerr(){
       x++;
       console.log(x);  
    }

    return innerr;
}

const fn2 = outerr();

const in1 = fn2();
const in2 = fn2();

in1();
in2();