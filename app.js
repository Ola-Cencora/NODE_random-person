const fs = require('fs');

const genders = ['M', 'F'];
const maleFirstNames = [
    'Liam',
    'Noah',
    'Oliver',
    'James',
    'Elijah',
    'William',
    'Henry',
    'Lucas',
    'Benjamin',
    'Theodore'
]
const femaleFirstNames = [
    'Olivia',
    'Emma',
    'Charlotte',
    'Amelia',
    'Sophia',
    'Isabella',
    'Ava',
    'Mia',
    'Evelyn',
    'Luna'
]
const lastNames = [
    'Elsher',
    'Solace',
    'Levine',
    'Thatcher',
    'Raven',
    'Bardot',
    'St. James',
    'Hansley',
    'Cromwell',
    'Ashley'
]

const randChoice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return (arr[randomIndex]);
};

const people = [];

for (let i=0; i<20; i++) {

    const person = {};

    person.gender = randChoice(genders);

    if (person.gender === 'M') {
        person.firstName = randChoice(maleFirstNames);
    } else if (person.gender === 'F') {
        person.firstName = randChoice(femaleFirstNames);
    };

    person.lastName = randChoice(lastNames);

    person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    people.push(person);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw 'Something went wrong';
    console.log('File has been successfully generated! Check people.json');
})