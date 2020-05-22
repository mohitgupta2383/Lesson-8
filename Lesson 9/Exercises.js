const fs = require("fs");
const path = require("path");

// 1 Create a function that takes 2 arguments. The first should be a file name and the second should be content. The function should create a file with the given name in the current directory with content equal to the content argument
// function writeFile(fileName, content) {
//     fs.writeFileSync(path.join(__dirname, fileName), content);
// }

// writeFile("TestEx1.txt",'hello');

// 2 Create a function that takes 1 argument, a file name. The function should return a string that is the whole file.
// function readFile(fileName) {
//     return fs.readFileSync(path.join(__dirname, fileName)).toString();
// }

// let myFile = readFile("TestEx1.txt");
// console.log(myFile);



// 1 Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. Create an instance method that returns a json string representing the object.

class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    asJSON() {
        return JSON.stringify(this);
    }

    // 2 Create a static method that takes a json string representing the object and returns a new instance of student
    static toStudent(jsonStudent) {
        let obj = JSON.parse(jsonStudent);
        return new Student(obj.firstName, obj.lastName, obj.age, obj.grades);
    }
}

// let luke = new Student("Luke", "Parker", 23, [97, 99, 98, 94]);
// console.log(luke);
// let lukeAsJSON = luke.asJSON();
// // let lukeAsJSON = JSON.stringify(luke);
// console.log(lukeAsJSON);


// let lukeJSON = '{"firstName":"Luke","lastName":"Parker","age":23,"grades":[97,99,98,94]}';
// let lukeStudent = Student.toStudent(lukeJSON);
// console.log(lukeStudent);
// console.log(lukeStudent.getFullName())

// 1 Create a method that writes an array of students to a json file
let students = [
    new Student("Luke", "Parker", 23, [97, 99, 98, 94]),
    new Student("Lucy", "Jones", 23, [97, 99, 98, 94])
];

function writeJSONFile(fileName, content) {
    let jsonContent = JSON.stringify(content);
    fs.writeFileSync(path.join(__dirname, fileName), jsonContent);
}

writeJSONFile("ExStudents.json", students);

// 2 Create a method that retrieves a list of students from a json file and returns them as student objects

function readStudentsJSONFile(fileName) {
    let jsonString = fs.readFileSync(path.join(__dirname, fileName)).toString();
    let objs = JSON.parse(jsonString);
    console.log(objs)
    let students = objs.map(obj => new Student(obj.firstName, obj.lastName, obj.age, obj.grades));
    return students;
}

let myStudents = readStudentsJSONFile("ExStudents.json")
console.log(myStudents)