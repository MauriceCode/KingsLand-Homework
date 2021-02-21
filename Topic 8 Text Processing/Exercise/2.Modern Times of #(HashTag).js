function main(text) {
    
    let findHash = text.split(' ')
    let specialWords = '';

    for (let i = 0; i < findHash.length; i++) {
        
        if (findHash[i].startsWith("#")) {
            const regEx = /\d/g;
            if (!regEx.test(findHash[i])) {
                // newArr.push(findHash[i].substring(1));
                console.log(findHash[i].substring(1))
            }
        }
    }
}

main('Nowadays everyone uses # to tag a #special word in #socialMedia')

// function main(str) {
//     let newStr = str.split(" ");
//     let newArr = [];
//     // let mapVar = newStr.map(function (element) {
//     // });
//     newStr.forEach(function(element) { // array.forEach(function (currentValue, index, arr), thisValue)
//         if (element.startsWith("#")) {
//             const regEx = /\d/g;
//             if (!regEx.test(element)) {
//                 // newArr.push(element.substring(1));
//                 console.log(element.substring(1))
//             }
//         }
//     });
//     console.log(newArr.join("\n"))
//     // console.log(newArr.filter(Boolean).join("\n"))
// }