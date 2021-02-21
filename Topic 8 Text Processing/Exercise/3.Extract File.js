function main(filePath) {

    let fileName = filePath.split('\\')
    // console.log(fileName)
    fileName.forEach((element, index) => {
        // let spltElement = element.split('.')
        if (element.includes('.') && element[1].includes('.') ) {
            console.log(element)
        }
         
    })

}

main('C:  \\Internal\\training-internal\\Template.pptx')

// function main(filePath) {
//     let splitArr = filePath.split("\\");
//     const length = splitArr.length;
//     const file = splitArr[length - 1];
//     const fileArr = file.split(".")
//     const lengthFileArr = fileArr.length;
//     const fileName = fileArr.slice(0, lengthFileArr - 1).join(".")
//     const fileExt = fileArr[lengthFileArr - 1]
//     console.log(`File name: ${fileName}`);
//     console.log(`File extension: ${fileExt}`)
// }