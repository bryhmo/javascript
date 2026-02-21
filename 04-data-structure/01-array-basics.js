const numbers = [10,20,30,40];
console.log(numbers[2]);
console.log(numbers[0]);
console.log(`The lenght of the array is: ${numbers.length}`);


// ararays are mutable ... meaning you can update value by index .... in the backend you may cached lists or temporary data structures.

const users = ["john","jane","mike"];
users[1] = "sarah";
users[4]= "ibrahim";
users[3]= "aishat";
console.log(users);

// adding and removing items 

const tasks = ["tasks1 ","task2"];
tasks.push("tasks3")//adding to the end of the array
tasks.unshift("tasks0")//adding to the begining of the array

console.log(tasks);

tasks.pop(); //remove last last element odf the array
tasks.shift(); //remove first element of the array

console.log(tasks)



// looping through arrays (very important)
const prices = [100,200,300,400];
for(let i = 0; i<prices.length;i++){
    console.log("price:",prices[i]);
}
/* 
you iterate over 
Database row 
query results
request payload
*/
const students = ['john','alfred','aishat','gold','ajayi'];
for(let i = 0; i < students.length; i++){
   console.log(`student :`,students[i]); 
}


// Array of Objects (Real Backend Data)
const studentRecords = [
    {id:1,firstName:"ibrahim",lastName:"isiaka",age:30,occupation:"Lecturer",hobby:"coding"},
    {id:2,firstName:"assadullah",lastName:"sanusi",age:36,occupation:"Lecturer 1",hobby:"gaming"},
    {id:3,firstName:"umar",lastName:"shehu",age:28,occupation:"Snr Lecturer",hobby:"researh"},
    {id:4,firstName:"John",lastName:"Esosa",age:38,occupation:"furniture",hobby:"lanlord"},
    {id:5,firstName:"collins",lastName:"syverster",age:24,occupation:"student",hobby:"football"}
];

studentRecords.forEach(student => {
    console.log(student.id,student.firstName,student.lastName,student.age,student.occupation,student.hobby);
    
});

console.log(studentRecords[1].firstName);


// Checking if values Exists
/* 
Backend use:

Role checking

Permission validation

Input validation

*/

const roles = ["admin","user","editor","student"];
if(!roles.includes("admin")){
    console.log("Your role is Admin");
}else{
    console.log("you are not an Admin");
}

console.log(roles.includes("guest"));



// combining arrays using spread operators ...array1,...arr2
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const arr4 = [10,11,12];
const arrayCombined = [...arr1,...arr2,...arr3,...arr4];
console.log(arrayCombined);

// note you can combined as many as possible arrays with spread operators 
/* 
building confident in 
must confidently:

Access items

Modify items

Loop through arrays

Handle arrays of objects

Add/remove elements

Use includes()

Use spread operator
*/

const arr = [5,10,15];
arr.push(20);
arr.shift();

console.log(arr);