// function main(inputArr) {



//     let employeeObj = {
//         name: inputArr,
//         personalNumber: inputArr
//         // nameLength = Object.key(employeeObj.length)
//     }
//     for (let key in employeeObj) {
//         console.log(key)
//     }

//     // employeeObj.forEach(element => {
//     //     console.log(element)
//     // })
//     console.log(`Name: ${employeeObj.name[0]} -- Person Number: ${employeeObj.name[0].length}`);
//     console.log(`Name: ${employeeObj.name[1]} -- Person Number: ${employeeObj.name[1].length}`);
//     console.log(`Name: ${employeeObj.name[2]} -- Person Number: ${employeeObj.name[2].length}`);
//     console.log(`Name: ${employeeObj.name[3]} -- Person Number: ${employeeObj.name[3].length}`);
//     // console.log(`Name: ${employeeObj.name[4]} -- Person Number: ${employeeObj.name[4].length}`);
// }


// main(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])

function main(inputArr) {
    // List of employees
    employees = []


    // Object constructor
    function Employee(name) {
        this.name = name;
        this.number = name.length;
        this.printName = function () {
            return `Name: ${this.name} -- Person Number: ${this.number}`
        }
    }


    // Iterate over each item in the input array
    inputArr.forEach(name => {
        const employee = new Employee(name)
        employees.push(employee)
    })


    // Call the printName method for each employee
    employees.forEach(employee => {
        console.log(employee.printName())
    })
}

main(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])