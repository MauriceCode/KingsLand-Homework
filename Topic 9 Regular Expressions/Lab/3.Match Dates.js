function main(dates) {

    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gim;


    // let matches = dates.match(pattern)
    // let getDate = pattern.exec(dates)
    // console.log(getDate.groups.year)
    // while(getDate) {
    //     console.log(`Day: ${getDate.groups.day}, Month: ${getDate.groups.month}, Year: ${getDate.groups.year}`)
    //     getDate = pattern.exec(dates)
    // }

    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day']
        let month = validDate.groups['month'];
        let year = validDate.groups['year']
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}

main('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'
)