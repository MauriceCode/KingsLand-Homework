function main(reservationNums) {

    // All reservation numbers will be with 8 chars
    // two types: VIP and regular numbers
    // All VIP numbers start with digit
    // When you receive the command "PARTY" the guests start coming.
    // Output all guest, who didn't come to the party (VIP must be first)

    let map = new Map();

    let item = reservationNums.shift();
    
    // constructing the map to pull data from 
    while (item !== 'PARTY') {
        if (item[0] >= 0 && item[0] <= 9) {
            map.set(item, ['vip', 'unAttended'])
        }
        else {
            map.set(item, ['guest', 'unAttended']);
        }
        item = reservationNums.shift();
    }
        // console.log(map)
        // 
        reservationNums.forEach(element => {
            if (map.has(element)) {
                map.get (element)[1] = 'Attended';
            }
        })
        // Compairing VIP and Guest
        let newArr = Array.from(map)
        let unAttended = newArr.filter(a => a[1][1] === 'unAttended').map(a => [a[0], a[1][0]]);
        unAttended.sort((a, b) => b[1].localeCompare(a[1]));
        console.log(unAttended.length)
        unAttended.forEach(guest => console.log(guest[0]));
        
}

main(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc'])