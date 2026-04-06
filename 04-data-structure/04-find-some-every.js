/*
find(), some(), every() 
These methods are heavily used in:
Validation

Authentication checks

Permission systems

Data existence checks

Business rule enforcement
*/


/* 

Overview
Method    	    Returns	                      Purpose

find()      	First matching element	      Retrieve one item

some()	        true/false	                  Check if at least one matches

every()	      true/false	                  Check if all match
*/



const students = [
    {id:1,firstName:"ibrahim",lastName:"isiaka"},
    {id:2,firstName:"ibrahim",lastName:"isiaka"},
    {id:3,firstName:"ibrahim",lastName:"isiaka"},
    {id:4,firstName:"ibrahim",lastName:"isiaka"}
];

const result = students.find(
    student => student.id === 2
);
// This is how you simulate database row lookup.
// the find return the first matching element only
console.log(result);


/* const users = [
    {id:1,name:"jane"},
    {id:2,name:"oba"},
    {id:3,name:"ademide"},
    {id:4,name:"baba Ghana"},
    {id:4,name:"ibrahim"},
    {id:5,name:"abdullah"}
];

const user = users.find(u=>u.id>4);
console.log(user); */



const users = [
    {id:1,active:true},
    {id:2,active:false},
    {id:3,active:true}
];
// check if a user exist 
const userExists = users.find(user => user.id===3);
console.log(userExists);

//check if at leat one inactive user exist 
const inactiveUser = users.some(user=>!user.active);
if(inactiveUser){
    console.log(inactiveUser);
}
else{
    console.log("All our users are active");
}

// check if all users are active 
const allActiveUsers = users.every(user=>user.active);
console.log(allActiveUsers);


