// function main(arr) {
//     // console.log(arr)
//     // let town = Object.entries(arr)
//     // console.log(town)

//     // Iterate through array seperate strings

//     arr.forEach(element => {
//         let towns = element.split(' | ')
//         // console.log(towns[0])
//         let cityName = towns.shift()
//         let latitude = towns.shift().toFixed(2)
//         let longitude = towns.shift().toFixed(2)
//         // console.log(cityName)
//         // console.log(longitude)
//         // console.log(latitude)
//         // for (let i = 0; i < towns.length; i++) {

//         // }
//         console.log(`town: ${cityName}, latitude: ${latitude.toFixed(2)}, longitude: ${longitude}`)
//     })




// }

function main(arr) {
    let towns = {
        town: '',
        latitude: 0,
        longitude: 0
    };
    arr.forEach((item) => {
        let [name, lat, long] = item.split(' | ');
        towns.town = name;
        towns.latitude = Number(lat).toFixed(2);
        towns.longitude = Number(long).toFixed(2);
        console.log(towns);
    });
}

main(['Atlanta | 33.753746 | -84.386330',
    'Beijing | 39.913818 | 116.363625']);