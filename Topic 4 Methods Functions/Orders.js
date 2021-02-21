function calcPrice(drinkType, qty) {
    switch (drinkType) {
        case 'water':
            return 1 * qty;
        case 'coffee':
            return 1.5 * qty;
        case 'coke':
            return 1.4 * qty;
        case 'snacks':
            return 2 * qty;
    }

    // let drinks = ['water', 'coffee', 'coke', 'snacks'];
    // let prices = [1, 1.5, 1.4, 2];

    // let index = drinks.indexOf(drinkType);
    // let price = prices[index];
    // return price * qty;
}



function main(drinkType, qty) {
    let drinkOrder = calcPrice(drinkType, qty);
    console.log(drinkOrder.toFixed(2))
}