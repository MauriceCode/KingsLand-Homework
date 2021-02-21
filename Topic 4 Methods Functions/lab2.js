function hello() {
    console.log('Hello World')
}
hello()

function add(a = 1, b = 2) {
    return [a, b];
}
// add()
let result = add(5, 4);
console.log(result[3]);