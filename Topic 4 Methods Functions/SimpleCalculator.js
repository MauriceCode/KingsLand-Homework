let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function main(num1, num2, opt) {

    let operators = ['multiply', 'subtract', 'add', 'divide'];
    let mathOpt = ['*', '-', '+', '/'];

    let index = operators.indexOf(opt);
    let sign = mathOpt[index];

    let result = eval(`${num1} ${sign} ${num2}`)
    console.log(result)
}

main(5, 5, 'multiply');
main(40, 8, 'divide');
main(12, 19, 'add');


// let result;
// switch (opt) {
//     case 'add':
//         result = add(num1, num2);
//         break;
//     case 'subtract':
//         result = sub(num1, num2);
//         break;
//     case 'multiply':
//         result = multiply(num1, num2);
//         break;
//     case 'divide':
//         result = divide(num1, num2);
// }
// console.log(result)