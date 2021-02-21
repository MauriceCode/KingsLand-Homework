function main(text, word) {

    let censored = text.replace(word, repeat(word))
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }
    
}

function repeat(hidden) {
    let secWord; 
    if (!hidden === undefined) {
        

    }
}
main("A small sentence with some words", "small")