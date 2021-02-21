function main(arr1, arr2) {

    // store results in a new string
    let oddQuantity = {};
    let evenQuantity = {};

    // Iterate first array and check for even index
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            console.log(`Even: ${arr1[i]}`)
        }
        else if (i % 2 === 1) {
            console.log(" ODD ", arr1[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (j % 2 === 0) {
            console.log(`Even J: ${arr2[j]}`)
        }
        else if (j % 2 === 1) {
            console.log(" ODD J", arr2[j])
        }
    }

    //  Need to compare the arrays
    arr1.filter(element)

    // Create new object
    const storeObj = {
        product:,
        quantity: 
}

}

main(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])