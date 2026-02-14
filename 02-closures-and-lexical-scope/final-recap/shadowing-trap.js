function test(){
  let value = 10;
  return {
    change:function(){
      let value = 20;
      console.log(value);
    },
    print:function(){
      console.log(value);
    }
  }
}

const fn = test();

fn.change();
fn.print();