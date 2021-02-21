let person = {
    name: 'Mike',
    age: 25,
}
Object.defineProperty(person, 'job', {value: "Teacher", enumerable: false})

for (let key in person) {
    console.log(key)
    person.job = 'Developer';
    console.log(person.job)
}