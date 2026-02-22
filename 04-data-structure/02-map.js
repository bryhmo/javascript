/* 
a map is a transformation functiion
*/

// map()... does not not modify the original array. it returns a new array


/* 
array.map(function(item,index,array)){
    return something;
}

 */

// OR

// array.map(item => something);


const numbers = [1,2,3,4,5,6];
const mapExample = numbers.map(num => num * 4);
console.log(mapExample);
console.log(numbers);

// [ 4, 8, 12, 16, 20, 24 ]  output 
/* 
explanation :
it loops internally 
each value is transformed 
Returns a new array.
*/

// EXTRACTING DATA (REAL BACKEND USE)

const users = [
    {id:1,name:"john",email:"john@mail.com"},
    {id:2,name:"jane",email:"jane@mail.com"}

];

const emails = users.map(user=>user.email)
console.log(emails);
console.log(users);

/* THIS IS VERY COMMON IN :
    API responses
    Database query formatting 
    Sending selected fields to frontend 
*/


// FORMATTING DATA FOR API RESPONSE 
const products = [
    {id:1,name:"Laptop",price:1000},
    {id:2,name:"phone",price:500}
];

const formatted = products.map(product =>{
    return {
        productId: product.id,
        productName: product.name,
        priceWithTax: product.price*1.1,
    };
});

console.log(formatted); //this is the real backend transformation logic ....you never send raw DB data directly.

// CONDITIONAL MAPPING 
const scores = [40,70,85,30];
const result = scores.map(score=>{
    if(score>=50){
        return "PASS";
    }else{
        return "FAILED";
    }
})

console.log(result);



//5 ADDING NEW PROPERTY TO OBJECTS

const customers = [
    {name:"Nsisong Bassey",age:27,vission:"Progrmmer"},
    {name:"adebusoye emmanuel",age:16,vission:"bitcoin trading"}
];

const updateUser = customers.map(customer =>{
    return {
        ...customer,
        isAdult :customer.age >= 18
    };
});

console.log(updateUser);

// 6 Transformed Nested Data

const orders = [
    {id:1,items:[10,20]},
    {id:2,items:[5,15]}
];

const totals = orders.map(order =>{
    const total = order.items.reduce((sum ,price)=>sum + price,0);
    return{
        orderId:order.id,
        totalAmount:total
    };
});

console.log(totals);



