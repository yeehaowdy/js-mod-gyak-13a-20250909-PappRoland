//handler
import {default as Person} from "./person.js";
import {default as Student} from "./student.js";
import {default as Teacher} from "./teacher.js";
//import Person from "./person.js";
//import Student from "./student.js";
//import Teacher from "./teacher.js";




/*Person.forEach((person) =>{
    console.log(person.name);

});

Student.forEach((student) => {
    console.log(student.marks);

});

Teacher.forEach((students) => {
    console.log(students.students);

});*/

let person = new Person({name: 'John Person'});
console.log(person.name);

let student = new Student({marks: [5,5,4,]});
console.log(student.marks);

let teacher = new Teacher({students: ['John Tanuló', 'János Student']});
console.log(teacher.students);

const personOut = document.getElementById('person');
personOut.innerHTML = `<p>${person.name}</p>`;

const studentOut = document.getElementById('student');
studentOut.innerHTML = student.marks.map(mark => `<p>${mark}</p>`).join('');

const teacherOut = document.getElementById('teacher');
teacherOut.innerHTML =  teacher.students.map(student => `<p>${student}</p>`).join('');
