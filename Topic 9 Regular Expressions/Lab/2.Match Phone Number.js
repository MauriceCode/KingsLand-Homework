function main(nums) {

    let pattern = /\+404(-| )(\d{3})\1(\d{4})\b/gim;

    let matches = nums.match(pattern);
    console.log(matches.join(', '))

    // method 2
    let validNum = [];
    let validNums = pattern.exec(nums)
    while (validNums) {
        validNums.push(validNum[0]);
        validNum = [pattern.exec(nums)]

    }
    console.log(validNums.join(', '))
}

main('+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222'
)