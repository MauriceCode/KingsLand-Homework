function main(friends, commands) {

    // user names to save in array 
    let checkNames = [];
    let splt = friends.split(', ')

    // Iterate commands and locate black listed names
    let blackListed = [];
    let counter = 0;
    // Iterate through names list
    splt.forEach((elements => {
        checkNames.push(elements);
        // Iterate until 'Report' 
        // Check for names on the Blacklisted names
        for (let i = 0; i < commands.length; i++) {
            if(checkNames.indexOf(commands) > -1) { 
                console.log(`${checkNames} was blacklisted`)
                
            }
        }
        //  console.log(checkNames[0])
    }));
    // }console.log(`Blacklisted names: ${blacklistedNamesCount}`)
    counter++
}
// console.log(counter)



main(`Mike, John, Eddie`, ['Blacklist Mike', 'Error 0', 'Error 1', 'Change 2 Mike123', 'Report']);
