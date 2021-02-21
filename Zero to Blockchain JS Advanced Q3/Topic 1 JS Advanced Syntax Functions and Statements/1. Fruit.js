function main(fruitType, weight, price) {
    let weightRounded = weight / 1000;
    let roundPrice = price.toFixed(2)
    let money = price * weightRounded;
    // console.log(money)
    // console.log(weightRounded)
    // console.log(roundPrice)
    console.log(`I need$${money.toFixed(2)} to buy ${weightRounded.toFixed(2)} kilograms ${fruitType}.`)
}

main('orange', 2500, 1.80)
// console.log(2500.00 / 1.80)