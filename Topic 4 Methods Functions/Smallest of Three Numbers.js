function smallest(...input) {

    let sortArr = input.sort().shift();
    return sortArr
    console.log(sortArr) 
}


function main(...inputArr) {
    let result = smallest(...inputArr);
    console.log(result)
}
main(2,  5,  3)

// main(2,  5,  1)

// let newArr = [];
    // newArr.push(input);
    // let smallestNum = Number(input[0]);
    // // console.log(newArr)
    // for (let i = 0; i < input.length; i++) {
    //     // console.log(input[i])
    //     if (input[i] < smallestNum) {
    //         smallestNum = input[i]
    //     }
    // }
    // return smallestNum
