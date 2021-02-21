// let obj = {name: 'maurice', age: 39, hairColor: 'bald'};
// console.log(obj.age)

// let person = {}
// person.name = obj.name;
// person['lastName'] = 'Moore'
// person.age = obj.age;
// person.hairColor = 'Black'
// console.log(person)

// let person = {
//     sayHello : function() {
//         console.log('hi, guys')
//     }
// }

// let student = {name: 'Pete', age: 25, grade: 5.75};
// for (let key in student) {
//     console.log(`${key} -> ${student[key]}`)
// }

function main(arr) {

    // create object
    arr.forEach((a, i) => {
        console.log(a, i)
    });
    // let city = {
    //     name: name,
    //     area: area, 
    //     population: population,
    //     country: country,
    //     postCode: postCode
    // }

    // // Itereate throughthe object
    // for (let propName in city) {
    //     console.log(`${propName} -> ${city[propName]}`)
    // }

}
main(['Atlanta', 347, 420003, 'USA', 30060])