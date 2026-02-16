async function getUser(){
  try{
    const resposnse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!resposnse.ok){
      throw new Error("Failed to Fetch Users");
    }
    const result = await resposnse.json();
    console.log(result)
  }catch(error){
    console.log(error);
  }
}

getUser();