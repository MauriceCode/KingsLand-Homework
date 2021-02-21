// let a = 9;
// console.log(a) //undefined

// let foo = 42;    // foo is now a number
// foo = 'bar';     // foo is now a string
// foo = true;
// foo = false;      // foo is now a boolean

// console.log(foo)


// "use strict";
// x = 3.14; // This will cause an error because x is not declared
// x = 3.14;  
// let y;     // This will NOT cause an error.
// myFunction();
// function myFunction() {    
//     "use strict";    
//     y = 3.14; 
//     console.log(y)  // This will cause an error
// }
// let car = { type: "Benzo", model: "QX80", color: "blue" };
// let carType = car.type;
// let carType2 = car["model"];

// // console.log(carType)
// // console.log(carType2) // Access property 
// car.year = 2018;
// car["year"] = 2018; // Add new property 
// car.color = "black";
// car["color"] = "black"; // Correct existing property
// // console.log(car.year)

// let a = 15;
// let b = 5;
// let c;
// c = a * b; // 20
// c = a - b; // 10
// c = a * b; // 75
// // c = a / b; // 3
// // c = a % b; // 0
// // c = a ** b;//155 = 759375
// console.log(c)

// console.log(1 == '1'); // true
// console.log(1 === '1');// false
// console.log(3 != '3'); // false
// console.log(3 !== '3');// true
// console.log(5 < 5.5);  // true
// console.log(5 <= 4);   // false
// console.log(2 > 1.5);  // true
// console.log(2 >= 2);   // true
// console.log(5 ? 4 : 10);// 4

// let valu = false || 'yes' && 5 && null && true;
// console.log(valu); // null
// let val = true && 'no' && 5 && 25 && 'yes';
// console.log(val); // 'yes'

// let val1 = !true
// console.log(val1); // false
// let val = !false;
// console.log(val); // true

// let val = 5;
// console.log(typeof val);    // number
// let str = 'hello';
// console.log(typeof str);    // string
// let obj = { name: 'Maria', age: 18 };
// console.log(typeof obj);   // object

// let cars = { key: "benzo and the range rover" };
// let cars1 = ['saab', 'benz', 'range']
// console.log(cars instanceof Array);  // Returns true
// console.log(cars instanceof Object); // Returns true
// console.log(cars.key instanceof String); // Returns false/ not an object
// console.log(typeof cars.key)
// console.log(cars instanceof Number); // Returns falsе
// console.log(new Array(['test', 'this']) == false);

// function hypotenuse(m, n) { // outer function    
//     function square(num) {  // inner function        
//         return num * num;
//     }
//     return Math.sqrt(square(m) + square(n));
// }
// console.log(hypotenuse(3, 4))

// function aggregateElements(elements) {
//     // aggregate(elements, 0, (a, b) => a + b);
//     // aggregate(elements, 0, (a, b) => a + 1 / b);
//     aggregate(elements, " ", (a, b) => a + b);
//     function aggregate(arr, initVal, func) {
//         let val = initVal;
//         // console.log(val)
//         for (let i = 0; i < arr.length; i++)
//             val = func(val, arr[i]);
//         console.log(val);
//     }
// }
// aggregateElements([1, 2, 4])


// var gcd = function(a, b) {
//     if ( ! b) {
//         console.log(a) ;
//     }

//     return gcd(b, a % b);
// };
// console.log(gcd(2154, 458));

function main(num1, num2) {
    let result = 0;
    while (num1 != num2 ) {
       if (num1 > num2) {
           num1 = num1 - num2;
           console.log("First condition => ", num1)
       }
       else {
           num2 = num2 - num1;
           console.log("Second condition => ", num2)
       }
       
    } console.log(num2)
    
}
// main(15, 5);
// main(2154, 458);