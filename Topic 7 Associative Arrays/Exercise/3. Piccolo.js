function main(arr) {
    // construct map [car => direction]
    // create an array based on the map using Array.from()
    // filter the array to keep only the 'In' cars
    // sort the array based on the car number

    let map = new Map();
    // iterate array 
    arr.map(element => {
        let [direction, carNum] = element.split(', ');
        map.set(carNum, direction)    
    })
    
    // create new array to filter to keep the "IN" cars
    let newArr = Array.from(map)

    // filter array and keep all "IN" cars
    let carsIn = newArr
        .filter(([carNum, direction]) => direction === 'IN')
        // .map(([carNum, direction]) => [carNum, carNum.slice(2, 6)])
        
    if (carsIn.length > 1) {
        carsIn.sort((a, b) => a[1] - b[1]);
        carsIn.forEach(element => console.log(element[0]))
    }
    else {
        console.log('Parking lot is empty')
    }

}

// main(['IN, CA2844AA,', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
main(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])


// Write function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number

// function main(arr) {

//     // Create an empty map
//     let map = new Map();

//     // Loop through the array items 
//     arr.forEach(item => {
//         //get the direction and carNumber 
//         let [direction, carNumber] = item.split(', ');
//         map.set(carNumber, direction);
//     })

//     // Create an array of the map
//     let mapArr = Array.from(map);

//     // Filter only in cars 
//     let inCars = mapArr
//         .filter(([carNumber, direction]) => direction === 'IN')
//         .map(([carNumber, direction]) => [carNumber, carNumber.slice(2, 6)])

//     if (inCars.length > 1) {
//         inCars.sort((a, b) => a[1] - b[1]);
//         inCars.forEach(item => console.log(item[0]));
//     } else {
//         console.log('Parking Lot is Empty');
//     }
// }

// main(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ])