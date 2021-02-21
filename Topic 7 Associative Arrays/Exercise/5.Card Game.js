function main(input) {
    // prepare the cards each person has
    // ensure that the cards are unique
    // Peter => [2C, 4H, 9H] ...

    // create a new map to hold data 
    const people = new Map()
    input.forEach((entry) => {
        let [person, currentCards] = entry.split(': ')
        currentCards = currentCards.split(', ')
        
        // get person name and cards
        const personCards = people.get(person);
        if (personCards) {
            people.set(person, [...personCards, ...currentCards])
        }
        else {
            people.set(person, currentCards);
        }

        // Setting new entries into the map looking for unique cards
        const set = new Set(people.get(person))
        const uniqueEntries = Array.from(set);
        people.set(person, uniqueEntries);
    })
    

    // caculate the scores for each person
    const scores = {}
    const entries = Array.from(people.entries())
    entries.forEach(([person, cards]) => {
        // console.log(cards)
        cards.forEach((card) => {
            let [P, T] = card.split(/([SHDC])/)
            // console.log(P, T)
            // the converted cards to numbers function
            P = convertToNumber(P);
            T = convertToNumber(T);

            if(!scores[person]) {
                scores[person] = 0;
            }

            scores[person] += P * T;
        });
    });

    // console.log(scores)
    // output, name: score
    entries.forEach(([person]) => {
        console.log(`${person}: ${scores[person]}`)
    })
}
// this returns the value of the 'jack' to 'ace' and card types outlined
function convertToNumber(value) {
    if (isNaN(value)) {
        switch(value) {
            case 'J': return 11
            case 'Q': return 12
            case 'K': return 13
            case 'A': return 14

            case 'S': return 4
            case 'H': return 3
            case 'D': return 2
            case 'C': return 1
        }
    }
        return Number(value)
}

main(['Peter: 2C, 4H, 9H, AS, QS','Tomas: 3H, 10S, JC, KD, 5S, 10S','Andrea: QH, QC, QS, QD','Tomas: 6H, 7S, KC, KD, 5S, 10C','Andrea: QH, QC, JS, JD, JC','Peter: JD, JD, JD, JD, JD, JD'])

// spread operator 
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const combine = [...arr1, ...arr2]
// console.log(combine)

// deconstructor
// const array = ['maurice', [12345]];
// const name = array[0];
// const number = array[1]
// const [name, number] = array
// console.log({name, number})

// split 
// const data = '10S';
// const [P, T] = data.split(/([SHDC])/)
// console.log(P, T)

// set 
// const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]
// const set = new Set(array)
// console.log(Array.from(set))