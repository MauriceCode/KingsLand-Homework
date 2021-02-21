// let s = "Hello" + " " + "JS";
// let name = 'Maurice Moore';
// let state = 'Minnesota';
// console.log(state)


// let str2 = String('Hello Java')
// let num = 3
// let str = 'Hello world';
// console.log(typeof str2)
// console.log(typeof num)
// console.log(str.indexOf('d'));
// console.log(str.charAt('10'))

// function solve(string) {
//     // for (let ch in string) {
//     //     console.log(string[ch])
//     // }
//     // for (let i = 0; i < string.length; i++) {
//     //     console.log(string[i])
//     // }

//     let strArr = Array.from(string);
//     console.log(strArr)
//     strArr.forEach((ch) => console.log(ch))
    
// }
// solve('AWord')

// let text1 = 'Hello' + ' world';
// let text2 = ', JavaScript';

// // text1 += text2;
// text1 = text1.concat(text2)
// console.log(text1)


// let str= 'I am JavaScript Developer';
// let index = str.lastIndexOf('a');


// if (index == -1) {
//     console.log('Not found')
// } else {
//     console.log(index);
// }

// let NameArr = [{ name: 'John'}, { name: 'Mike'}, { name: 'Susan'}]

// let index = NameArr.indexOf({name: 'Mike'})

// console.log(index)

// let str = 'Hello world, JavaScript';
// str = str.substr(5, 10)
// console.log(str)

// let text = "Hello, john@kingsland.us, you have been using john@kingsland.us in your registration."; 
// let replacedText = text.replace('Hello', 'Hi')
// // let replacedText = text.replace('.us', '.com');
// console.log(replacedText)

// function main(word, text) {

//     // while (text.includes(word)) {
//     //     text = text.replace(word, '')
//     // }

//     let old;
//     while (old !== text) {
//         old = text; 
//         text = text.replace(word, '')
//     }
//     console.log(text)
// }

// main('ice', 'kicegiciceeb')

function main(str, start, end) {

    let strArr = str.substring(start, end)
     console.log(strArr)
}

main("ASentance", 1, 9)