function main(ch1, ch2) {

    let start, end, result = [];

    if (ch1 < ch2) {
        start = ch1.charCodeAt();
        end = ch2.charCodeAt();
        // console.log(start)
    }
    else {
        start = ch2.charCodeAt();
        end = ch1.charCodeAt();
    }
    for (let i = start + 1; i < end; i++) {
        // console.log('ITERATE: ', i)
        // console.log('END: ', end)
        result.push(String.fromCharCode(i))
        
    }console.log(result.join(' '))
    
}
// main('a', 'd');
main('#', ':');
// main('C', "#");