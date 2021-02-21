function repeatString(str, n) {

    let results = '';

    for (let i = 0; i < n; i++) {
        results += str
    }
    return results

}

function main(inputStr, nTimes) {
    let output = repeatString(inputStr, nTimes);
    console.log(output)
}

console.log(main('abc', 3));
// main('string', 2);

