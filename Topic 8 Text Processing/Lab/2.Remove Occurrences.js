function main(word, text) {

    let old;
    while(old !== text) {
        old = text;
        text = text.replace(word, '');
        
    }console.log(text)
    

}

main('ice', 'kicegiciceeb')