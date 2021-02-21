function main(arr) {

    // Access first value in array
    let splt = arr[0].split(' ');
    // console.log(splt)

    // Track number of occurance 
    let counter = 0;
    let list = [];
    // Iterate through array of words 
    // CHecking for 'this' and 'sentence'
    splt.forEach((element) => {
        // console.log(element)
        for (let i = 1; i < arr.length; i++) {
            // console.log(arr[i])
            if (element === arr[i]) {

                counter++
            }

        }
        // Accessing last value of string = [getWords.length - 1]

        let getWords = `${element} - ${counter}`;
        // console.log(getWords)
        list.push(getWords)


        // console.log(Number(getWords.sort()))
        counter = 0;
    })

    // console.log(``)
    // console.log('Test: ', list)
    list.sort((a, b) => (a[a.length - 1] < b[b.length - 1]) ? 1 : (a[a.length - 1] === b[b.length - 1]) ? ((a[0] < b[0]) ? 1 : -1) : -1)
    list.forEach((sortedWord) => {
        console.log(sortedWord)
    })
}

main(['this sentence your', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])