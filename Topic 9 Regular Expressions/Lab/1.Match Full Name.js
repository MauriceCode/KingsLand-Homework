function main(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    //Method 1
    // while ((validName = pattern.exec(names)) !== null)  {
    //     validNames.push(validName[0]);
    // }
    // console.log(validNames.join())
    let matches = names.match(pattern);
    console.log(matches.join(' '))

    let validName = pattern.exec(names);
    while (validName) {
        validNames.push(validName[0])
    }
}

main('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')


