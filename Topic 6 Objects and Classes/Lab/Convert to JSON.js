function main(fName, lName, hColor) {

    let person = {
        name: fName,
        lastName: lName,
        hairColor: hColor
    }

    let personJSON = JSON.stringify(person);
    console.log(personJSON)
}

main('George', 'Jones', 'Brown')