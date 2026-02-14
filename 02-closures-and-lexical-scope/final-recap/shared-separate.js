function counter(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

const c1 = counter();
const c2 = counter();

c1();
c1();
c2();
c1();
c2();