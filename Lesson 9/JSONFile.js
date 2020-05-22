// https://nodejs.org/api/fs.html
const fs = require("fs");
// https://nodejs.org/api/path.html
const path = require("path");
// https://nodejs.org/api/util.html
const util = require("util");

const FILE_PATH = path.join(__dirname, "People.json");
// const LOG_FILE_PATH = path.join(__dirname, "debug.log")
// const LOG_FILESTREAM = fs.createWriteStream(LOG_FILE_PATH, {flags : "w"});

// console.log = (v) => {
//     LOG_FILESTREAM.write(util.format(v) + "\n");
//     process.stdout.write(util.format(v) + "\n");
// }

class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(
                getRandomGivenName(),
                getRandomFamilyName(),
                getRandomNumber(42) + 18,
                uuid.v4());
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}


// let fileData = fs.readFileSync(filePath);
// let stringFileData = fileData.toString();
// let people = JSON.parse(stringFileData);

let peopleRaw = JSON.parse(fs.readFileSync(FILE_PATH).toString());


let people = peopleRaw.map(person => new Person(person.firstName, person.lastName, person.age, person.id));

let info = people.map(person => person.getInfo());


console.log(people[0]);

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    person.age++;
}

console.log(people[0]);

fs.writeFileSync(FILE_PATH, JSON.stringify(people));