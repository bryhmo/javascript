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