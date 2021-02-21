function main(...inputs) {
  const inputValues = inputs.slice(1);
  const decryptionKeyRegex = /[star]/gi;

  // 'STCDoghudd4=63333$D$0A53333'
  const formattedInputValues = inputValues.map((val) => {
    const decryptionKey = val.match(decryptionKeyRegex).length;

    const newValue = val.split('').map(item => {
      const asciiCode = item.charCodeAt() - decryptionKey;
      // console.log('asciiCode==>>', asciiCode)

      return String.fromCharCode(asciiCode);
    })

    return newValue.join('');
  })

  // console.log('formattedInputValues==>>', formattedInputValues);

  const messageRegex = /.*?@([a-z])+([^\!@\-:>])*:([0-9]+)([^\!@\-:>])*!([AD])!([^\!@\-:>])*->([0-9]+)([^\!@\-:>])*/gi

  const validMessages = formattedInputValues.filter(item => {
    const checkMatch = item.match(messageRegex);
    const getMatchValue = checkMatch ? checkMatch[0] : null;

    return getMatchValue === item;
  });

  // console.log('validMessages==>>', validMessages);

  const attackedPlanets = [];
  const destroyedPlanets = [];

  validMessages.forEach(val => {
    let [planet] = val.match(/@([a-z])+/gi);
    planet = planet.replace('@', '');

    let [attackType] = val.match(/!([AD])!/g);
    attackType = attackType.replace(/!/g, '');

    if (attackType === 'A') {
      attackedPlanets.push(planet)
    } else {
      destroyedPlanets.push(planet)
    }
  });

  const numberAttacked = attackedPlanets.length;
  const numberDestroyed = destroyedPlanets.length;

  console.log(`Attacked planets: ${numberAttacked}`);
  attackedPlanets.sort((a, b) => a.localeCompare(b)).forEach(val => console.log(`-> ${val}`))

  console.log(`Destroyed planets: ${numberDestroyed}`);
  destroyedPlanets.sort((a, b) => a.localeCompare(b)).forEach(val => console.log(`-> ${val}`))
}

main(
  2,
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR'
);

console.log('\n');

main(
  3,
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR"
);
