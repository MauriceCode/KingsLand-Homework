function main(arr) {

    let map = new Map()
    // console.log()
    for (let str of arr) {
        let splt = str.split(' ');
        let prdct = splt[0];
        let qnty = Number(splt[1]);
        // console.log(prdct)
        if (!map.has(prdct)) {
            map.set(prdct, +qnty);
        } else {
            let currQuantity = map.get(prdct);
            let newQuantity = currQuantity += qnty;
            map.set(prdct, newQuantity);
        }
        for (let key of map) {
            console.log(`${key[0]} -> ${key[1]}`)
        }
    }
}

main([`tomatoes 10`,
    `coffee 5`,
    `olives 100`,
    `coffee 40`])