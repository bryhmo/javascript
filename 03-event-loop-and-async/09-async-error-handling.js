async function getUser(){
  console.log("handling the errors");
  try{
    console.log("first");
    await Promise.reject("Error Occur");
    console.log("another runner");
  }catch(err){
    console.log("Error",err);
  } 

  console.log("d is the next");
}
getUser();
console.log("something again");


/* 
the await rejection becomes thrown error , 
the catch handle it
*/