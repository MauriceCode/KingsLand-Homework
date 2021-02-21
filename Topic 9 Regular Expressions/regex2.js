// const value = 'G!32e%o7r#32g$235@!2e';

// const numRegex = /([0-9])/g;

// const alphaRegex = /[A-Z]/gi;

// const command = 'end of race';

// const numSum = value.match(numRegex).reduce((a, b) => Number(a) + Number(b));
// console.log('numSum=>>>', numSum);

// const name = value.match(alphaRegex).join('');
// console.log('name=>>>', name);

function main (input = []) {
  const numRegex = /([0-9])/g;

  const alphaRegex = /[A-Z]/gi;

  const participantsCharArray = input.slice(1);
  const participants = input[0].split(', ');
  const command = 'end of race';

  const participantsObj = {};
  let i = 0;

  while (i < participantsCharArray.length) {
    if (participantsCharArray[i] === command) {
      break;
    } else {
      const numSum = participantsCharArray[i].match(numRegex).reduce((a, b) => Number(a) + Number(b));
      // console.log('numSum=>>>', numSum);

      const name = participantsCharArray[i].match(alphaRegex).join('');
      // console.log('name=>>>', name);

      if (participants.includes(name) && participantsObj[name] === undefined) {
        participantsObj[name] = numSum
      } else if (participants.includes(name)) {
        participantsObj[name] += numSum
      }
    }

    i++
  }

  // console.log(participantsObj)
  const validParticipants = [];
  for (let j in participantsObj) {
    const obj = {};
    obj[j] = participantsObj[j]
    validParticipants.push(obj)
  }

  // console.log(validParticipants)

  const sortParticipants = validParticipants.sort((a, b) => {
    const [aVal] = Object.values(a);
    const [bVal] = Object.values(b);

    return bVal - aVal
  });

  // console.log(sortParticipants.slice(0, 3));

  const participantsOrder = [];
  sortParticipants.slice(0, 3).forEach((item) => {
    const [itemVal] = Object.keys(item);

    participantsOrder.push(itemVal)
  });

  console.log(`1st place: ${participantsOrder[0]}`);
  console.log(`2nd place: ${participantsOrder[1]}`);
  console.log(`3rd place: ${participantsOrder[2]}`);
}

main([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'
]);