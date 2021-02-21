function main(tanksOwned, n, commands) {
    // console.log(tanksOwned, n, commands)
    let tanksBrought = [];
    let tanksSold = [];
    let splt = tanksOwned.split(', ');
    let tankName = []
    let index = [];

    splt.forEach((element) => {
        tankName = element;
        // console.log(tankName)

    });
        for (let i = 0; i < n; i++) {
            console.log(commands[i].split(','))
            
            if (commands[i].split(',') === 'Add') {
                // tankName.push(element)
                // console.log(commands)
            }
        }
    
}

main(`T-34-85 Rudy, SU-100Y, STG`, 3, 
['Add, King Tiger(C)', 'Insert, 2, IS-2M ', 'Remove, T-34-85 Rudy'])