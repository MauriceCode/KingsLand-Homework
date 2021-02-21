function main(arr) {
    let results = {}
    for (let str of arr) {
        let splt = str.split(' ');
        let name = splt[0];
        let number = splt[1]
        // console.log(number)
        results[name] = number;
        // console.log(results)
    }
    for (let key in results) {
        console.log(`${key} -> ${results[key]}`)
    }
}
main([`Tim 0834212554`,
    `Peter 0877547887`,
    `Bill 0896543112`,
    `Tim 0876566344`])
