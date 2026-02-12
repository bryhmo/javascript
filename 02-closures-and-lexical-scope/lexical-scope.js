let num = 55;
function textLexicalScope(){
  console.log(num);
}
textLexicalScope();

// this code above is an example of lexical scope ....which means a function can accessed a variable from where it was defined ... not from where it was called 