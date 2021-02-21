function main(string, searchedWrod) {

    let words = string.split(' ');
    let counter = 0;
    for (let word of words) {
        // if (word === searchedWrod) {
        //     counter++
        // }

        (word == searchedWrod) ? counter++ : '';
    }
    

    let wordFound = string.split(' ');
    let found = wordFound.filter(word => word == searchedWrod)
    console.log(found.length);
}




main("This is a word and it also is a sentence", "is")