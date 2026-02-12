1️⃣ What is Scope?
Scope determines where a variable is accessible.

Types:
Global scope
Function scope
Block scope

2️⃣ What is Hoisting?
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the creation phase.

Important:
var → hoisted and initialized as undefined
let / const → hoisted but not initialized (Temporal Dead Zone)
Function declarations → fully hoisted

3️⃣ Creation Phase

When JavaScript starts executing:
Global execution context is created
Memory is allocated
Variables stored
Functions stored fully
var initialized as undefined
let / const placed in TDZ