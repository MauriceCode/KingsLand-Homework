function sum(...input) {

    let sum = [];
    let addend = input.pop();
    for (let i = 0; i < input.length; i += 2) {
        
     sum.push(input[i] + input[i + 1])
        return sum - addend;
         
    } 
}
function main(...inputArr) {
    let result = sum(...inputArr);
    console.log(result)
}
main(23,  6,  10)
// sum(23, 6, 10)