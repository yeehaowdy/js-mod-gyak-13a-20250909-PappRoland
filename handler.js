//handler
import Person from "./person";
import Student from "./student";
import Teacher from "./teacher";



Person.forEach((person) =>{
    console.log(person.name);

});

Student.forEach((student) => {
    console.log(student.marks);

});

Teacher.forEach((students) => {
    console.log(students.students);

});

let person = new Person('John Person');
console.log(person.name);

let student = new Student([5,5,4,]);
console.log(student.marks);

let teacher = new Teacher(['John Tanuló', 'János Student']);
console.log(teacher.students);
