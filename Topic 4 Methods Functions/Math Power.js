function pow(num, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    return result
}

function main(num, p) {
    let output = pow(num, p);
    console.log(output)

}

main(8, 2)