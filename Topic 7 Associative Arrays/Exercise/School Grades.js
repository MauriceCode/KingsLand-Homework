function main(arr) {

    for (let item of arr) {
        // Get the name
        let itemsArr = item.split(' ')
        let name = itemsArr.shift();
        let grade = itemsArr.map(Number);
        console.log(name, grade)
    }
}

main(['Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3','Tim 6 6'])