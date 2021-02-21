// function main(arr) {
//     // let obj = {};
//     // console.log(obj)
//     // let splt = 
//     // let inventory = {
//     //     Hero: 'Issac',
//     //     level: '=> ' + 1,
//     //     items: '=> ' + 'Apple', 'Gravity Gun'
//     // }
//     // console.log(inventory.Hero)

//     let hero;
//     // arr.forEach((heroName) => {
//     //     let names = heroName.split(' / ')[0]
//     //     console.log(names)
//     // })
//     // console.log(arr)
//     arr.forEach((heroLevel, index, array) => {
//         console.log(`Hero: ${heroLevel} Index: ${index} Level: ${array}`)
//         // let level = heroLevel[1]
//         // console.log(level)
//         for (let i in arr) {
//             // let hero = hero[i]
//             console.log(hero)
//         }
//     })

// }


class Hero {
    constructor(heroName, heroLevel, heroItems) {
        this.heroName = heroName;
        this.heroLevel = Number(heroLevel);
        this.heroItems = heroItems;
    }
    updateItem(update) {
        this.heroItems = update;
    }
}
function main(arr) {
    let heros = [];
    arr.forEach(i => {
        let [heroName, heroLevel, heroItems] = i.split(' / ');
        heros.push(new Hero(heroName, +heroLevel, heroItems));
    });
    let sorted = heros.sort((a, b) => a.heroLevel - b.heroLevel);
    for (let i in sorted) {
        let update = sorted[i].heroItems.split(', ').sort().join(', ');
        heros[i].updateItem(update);
    }
    sorted.forEach((i) => {
        console.log(`Hero: ${i.heroName}\nlevel => ${i.heroLevel}\nitems => ${i.heroItems}`);
    });
}
main(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", " Hes / 1 / Desolator, Sentinel, Antara"])