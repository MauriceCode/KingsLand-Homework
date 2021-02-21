class Cat {
    // constructor method function 
    constructor(name, age) {
        // create properties using constructor inputs 
        this.name = name;
        this.age = age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says, Meow`)
    }
}

// let oscar = new Cat('oscar', 5);
// let miko = new Cat('miko', 4);
// console.log(miko.name)
function main(arr) {
    // create a new array that will hold the cat objects
    let cats = [];

    arr.forEach( (cat) => {
        // creating an array of [cat_name, cat_age]
        let catData = cat.split(' ');
        // getting the name and age from the array
        let [name, age] = catData;
        // create the cat object and push it inside the cats array
        cats.push(new Cat(name, age));
    })

    // Iterate through the input arry to access each cat data 
    cats.forEach(cat => {
        cat.meow();
    })
    
}

main(['Mellow 2', 'Tom 5'])


// for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].spilt(' '));

//         let catData = arr[i].split(' ');
//         let name = catData[0];
//         let age = catData[1];
//         // creat the cat object and push it inside the cats array
//         cats.push(new Cat(name, age))
//     }
//     for (let i = 0; i < cats.length; i++) {
//         cats[i.meow()]
//     }