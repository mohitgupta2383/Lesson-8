const random = require ("./Random")

class Person {
    constructor(firstName, lastName, age, id = uuid.v4()) {
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
              random.getRandomFamilyNamegetRandomGivenName(),
                random.getRandomFamilyName(),
                random.getRandomNumber(42) + 18
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

module.exports = Person;