"use strict";
//Q:24  More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//      If you want to try more comparisons, write more tests. Have at least one 
//      True and one False result for each of the following:
//    • Tests for equality and inequality with strings
//    • Tests using the lower case function
//    • Numerical tests involving equality and inequality, greater than and less than, 
//      greater than or equal to, and less than or equal to
//    • Tests using "and" and "or" operators
//    • Test whether an item is in a array
//    • Test whether an item is not in a array
let car = "car";
let uppercaseCar = "CAR";
let ten = 10;
let twenty = 20;
let colours = ["pink", "orange", "yellow", "red"];
console.log("\n Is car equal to car?");
console.log(car == "car");
console.log("\n Is car not equals to car?");
console.log(car != "car");
console.log("\nIs CAR equal to car after converting into lowercase?");
console.log(uppercaseCar.toLowerCase() == "CAR");
console.log("\n Is car not equal to car after converting into lowercase?");
console.log(uppercaseCar.toLowerCase() != "CAR");
console.log("\n Is ten equal to tewnty?");
console.log(ten == twenty);
console.log("\n Is ten not equal to twenty?");
console.log(ten != twenty);
console.log("\n Is ten greater than zero?");
console.log(ten > 0);
console.log("\n Is twenty less than 10?");
console.log(twenty < 10);
console.log("\n Is ten greater than or equal to 5?");
console.log(ten >= 5);
console.log("\n Is twenty less than or equal to 10?");
console.log(20 <= 10);
console.log("\n Is twenty not equals to 10 and twenty is greater than 10?");
console.log(20 != ten && twenty > 10);
console.log("\n Is twenty not equals to 10 and twenty is greater than 30?");
console.log(20 != ten && twenty > 30);
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 or 20 is not equals to 20");
console.log(20 > 50 || twenty != 20);
console.log("\nIs red include in my colours array?");
console.log(colours.includes("red"));
console.log("\n Is red not include in my colours array?");
console.log(!colours.includes("red"));
