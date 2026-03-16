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

const result = numbers
    .map(n => n * 2)
    .filter(n => n > 20);

console.log(result);