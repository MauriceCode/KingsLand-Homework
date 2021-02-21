function main(num1, num2, operator) {

    let total = 0;
    // Using arrow functions instead of switch cases

    let add = (a, b) => a + b;

    switch(operator) {
        case '+': total = num1 + num2; break;
        case '-': total = num1 - num2; break;
        case '*': total = num1 * num2; break;
        case '/': total = num1 / num2; break;
        case '%': total = num1 % num2; break;
        case '**': total = num1**num2; break;
   }
    console.log(total)

}

main(5, 6, '**')
