function checkGrade(grades) {

    if (grades >= 2.00 && grades <= 2.99) {
        return 'Fail';
    }
    else if (grades >= 3.00 && grades <= 3.49) {
        return 'Poor';
    }
    else if (grades >= 3.50 && grades <= 4.49) {
        return 'Good';
    }
    else if (grades >= 4.50 && grades <= 5.49) {
        return 'Very good';
    }
    else if (grades >= 6.50 && grades <= 6.00) {
        return 'Excellent';
    }
}

function checkGrade() {
    let lowerLimitArr = [2.0, 3.0, 3.5, 4.5, 5, 5];
    let upperLimitArr = [2.99, 3.49, 4.49, 5.49, 6.0];
    let grades = ['Fail', 'Poor', 'Good', 'Very Good', 'Excellent'];

    for (let i = 0; i < grades.length; i++) {
        if (grade >= lowerLimitArr[i] && grade <= upperLimitArr[i]) {
            return grades[i]
        }
    }
}

function main(grd) {
    let wordGrade = checkGrade(grd);
    console.log(wordGrade)
}
main(4.5)