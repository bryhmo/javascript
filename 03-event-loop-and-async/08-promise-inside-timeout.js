console.log("start");

setTimeout(()=>{
  Promise.resolve().then(()=>{
    console.log("inner timer");
  });
  console.log("timer");
},0);

/* 
timers run 
inside timer. Promise becomes microtask
Microtask runs immediately after the timer finishes
*/