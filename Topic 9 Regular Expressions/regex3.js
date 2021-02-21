
function main(...input) {
  const inputArray = input;
  const command = 'end of shift';
  const regexPattern = /%(([A-Z])[a-z]*)%([^\|\$\.%])*<([A-Za-z]+)>([^\|\$\.%])*\|([0-9]+)\|([^\|\$\.%])*([0-9]+\.?[0-9]+)\$([^\|\$\.%])*/g;

  const validInputs = inputArray.filter(item => {
    const checkMatch = item.match(regexPattern);
    const getMatchValue = checkMatch ? checkMatch[0] : null;

    return getMatchValue === item || item === command;
  });

  // console.log('validInputs===>>>', validInputs)

  const customerObj = {};
  let totalIncome = 0;

  let i = 0;

  while(i < validInputs.length) {
    if (validInputs[i] === command) {
      break;
    } else {
      let [customerName] = validInputs[i].match(/%(([A-Z])[a-z]*)%/g);
      customerName = customerName.replace(/%/g, '');

      let [product] = validInputs[i].match(/<([A-Za-z]+)>/g);
      product = product.replace(/[<>]/g, '');

      let [count] = validInputs[i].match(/\|([0-9]+)\|/g);
      count = count.replace(/\|/g, '');

      let [price] = validInputs[i].match(/([0-9]+\.?[0-9]+)\$/g);
      price = price.replace(/\$/g, '');

      const totalPrice = Number(count) * Number(price);

      totalIncome += totalPrice;

      customerObj[customerName] = [product, totalPrice.toFixed(2)];
    }

    i++
  }

  // console.log(customerObj);

  for (let i in customerObj) {
    console.log(`${i}: ${customerObj[i][0]} - ${customerObj[i][1]}`)
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

main(
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
);
console.log('\n');
main(
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift'
);
