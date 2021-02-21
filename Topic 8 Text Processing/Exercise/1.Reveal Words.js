function main(word, text) {

    let words = word.split(' ');
    let emptyStr = '';
    // console.log(words)

    words.forEach((input) => {
        emptyStr = text.replace('*'.repeat(input.length), input)
    });
    console.log(emptyStr)
}

main('great', 'kingsland is ***** place for learning new programming languages')
main('great, learning', 'kingsland is ***** place for ******** new programming languages'
)