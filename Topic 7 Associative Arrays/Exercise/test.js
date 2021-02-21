let arr = ['maurice', 'catherine', 'domayoum', 'asha']

let item = arr.shift();
console.log(item)
while (item !== 'asha') {
    if (item[0] === 'm') {
        console.log(item)
    }
}