let num = 55;
function textLexicalScope(){
  console.log(num);
}
textLexicalScope();

// this code above is an example of lexical scope ....which means a function can accessed a variable from where it was defined ... not from where it was called 



function outer(){
  let x = 10;
  return function(){
    console.log(x);
  }

}

const fn1 = outer();
const fn2 = outer();

fn1();
fn2();