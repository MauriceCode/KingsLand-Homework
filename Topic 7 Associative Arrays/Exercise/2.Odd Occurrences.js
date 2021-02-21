function main(str) {
    
    //convert to lowercase 
    str = str.toLowerCase()
    // convert to array
    let spltStr = str.split(' ')
    let newMap = new Map();
    
    // loop through spltStr array 
    spltStr.forEach(input => {
        // find similar inputs in array 
        // console.log(input)
        if (newMap.has(input)) {
            let newValue = newMap.get(input) + 1;
            newMap.set(input, newValue);
        }
        else {
            newMap.set(input, 1)
        }
    });
    //  console.log(newMap)

     let currentEntries = Array.from(newMap.entries())
    //  console.log(currentEntries)
     let output = [];

     currentEntries.forEach(element => {
         let [word, value] = element;
         if (value % 2 === 1) {
             output.push(word)
         }
     });

     console.log(output.join(' '))
}

main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

// // string with elements seperated by a single space 
//     str = str.toLowerCase();
//     // Scrub or augment data making sure data is usable 
//     let spltStr = str.split(' ')
//     // console.log(spltStr)
//     let result = []
//     let count = 0;
//     let arrayOfMatches =

//         spltStr.forEach((element) => {
//             result = [...str.matchAll(element)]
//             // console.log(result.length)
//             if (result.length % 2 === 1) {
//                 console.log(element)
//             }
//         })