
/* What filter() Really Does

filter():
Returns a new array containing ONLY the elements that pass a condition.
It does NOT modify the original array

*/


const fit1 = [10,20,14,23,29,19];

const result1 = fit1.filter(num =>num >= 18);
console.log(result1);


const fit2 = ["adebayo","Adegboye","Agbolagade","faith"];

const result2 = fit2.filter(num => num.length < 7 );

console.log(result2);

const fit3 = ["adebayo","Adegboye","Agbolagade","faith"];

const result3 = fit2.filter(num => num.length > 7 );

console.log(result3);


const numbers = [5, 12, 8, 20];

// this is joining the map function and the filter function together 
const result = numbers.map(n => n * 2).filter(n => n > 20);
console.log(result);

const users = [
    { name: "John", isAdmin: false },
    { name: "Jane", isAdmin: true }
];

const hasAdmin = users.some(u => u.isAdmin);

console.log(hasAdmin);


const students = [2,3,4,5,6];
const stuResult = students.map(student=>student*4);
console.log(stuResult);

const sortEvenNumbers = [3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const evenNumbers = sortEvenNumbers.filter(even=>even%2===0).map(even=>even**2);
console.log(evenNumbers);


const user = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 30 }
];

const adultNames = user
    .filter(user => user.age >= 28)
    .map(user => user.name);

console.log(adultNames);


/* 
When To Use filter()
Use it when:
You want to remove unwanted data
You want to validate
You want to apply business logic
You want clean non-mutating array handling
*/