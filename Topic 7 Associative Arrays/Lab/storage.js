function main(arr) {

    // create an empty Map
    let map = new Map()

    // Iterate through the input array to store key/value in Map
    for (let item of arr) {
        let product = item.split(' ')[0];
        let quantity = Number(item.split(' ')[1]);

        // If the Map doesn't have this item - key
        // add to the Map
        if (!map.has(product)) {
            map.set(product, quantity);
        }
        // If it already exists
        else {
            let oldQuantity =map.get(product);
            let newQuantity = oldQuantity + quantity;
            map.set(product, newQuantity);
        }
    }

    // Itereat to print the Map key/value
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`)
    }
}

main(['tomatoes 10','coffee 5','olives 100','coffee 40'])