function main(name, area, pop, conty, zip) {

    let city = {
        name: name,
        area: area,
        population: pop,
        country: conty,
        postCode: zip
    }

    let entries = Object.entries(city)
    entries.forEach(entry => {
        console.log(`${entry[0]} -> ${entry[1]}`)
    })
}

main('Atlanta', '343', '416474', 'USA', '404')