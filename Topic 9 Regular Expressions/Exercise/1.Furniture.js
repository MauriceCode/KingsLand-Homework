function main(arr) {

    console.log(arr)
    let i = 0;
    while (i < arr) {

        console.log(i)
    }
}
// const pattern = /(>>[A-Z]+<<)([0-9]+\.?[0-9]*)!([0-9]+)/gi;
// const pattern = />>([A-Z]+)<<([0-9]+\.?[0-9]*)!([0-9]+)/gi;

// const value = '>>Sofa<<312.23!3';
// // const value = '>>TV<<300!5';
// // const value = '>Invalid<<!5';

// const command = 'Purchase';

// const checkMatch = value.match(pattern); // regex match always returns the matched values in an array of strings.

// const getMatchValue = checkMatch ? checkMatch[0] : null;

// console.log(checkMatch);
// console.log('getMatchValue---===', getMatchValue);

// console.log(getMatchValue === value);


function main(...arguments) {
  const values = arguments;
  const pattern = />>([A-Z]+)<<([0-9]+\.?[0-9]+)!([0-9]+)/gi;

  const validValues = values.filter((item) => {
    const command = 'Purchase';
    const checkMatch = item.match(pattern);
    const getMatchValue = checkMatch ? checkMatch[0] : null;

    return getMatchValue === item || item === command;
  })

  // console.log(validValues);

  const boughtFurniture = [];
  let totalMoney = 0;

  let i = 0;

  while(i < validValues.length) {
    if (validValues[i] === 'Purchase') {
      break;
    } else {
      const [furniture] = validValues[i].match(/([A-Z]+)/gi);
      const [price] = validValues[i].match(/[0-9]+\.?[0-9]+/g);
      const [quantity] = validValues[i].match(/!(.*)/g);

      boughtFurniture.push(furniture);
      totalMoney += Number(quantity.replace('!', '')) * Number(price)
    }

    i++
  }

  console.log(`Bought furniture: \n${boughtFurniture.join('\n')}`);
  console.log(`Total money spend: ${totalMoney}`);
}

main('>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase');
main(['Sofa', 312.23, 3, 'TV', 300, 5, 'Invalid', 5, 'Purchase'])