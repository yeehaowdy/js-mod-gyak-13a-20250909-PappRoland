//teacher
export default class Teacher extends Person{
    _students = [];

    constructor(students){
        super();
        var addStudents = [...this._students];
        this._students = [...addStudents, ...students];

    }
    get students(){
        return this._students;

    }

    set students(value){
        this._students = value;
    }

}

//test task 5
//let teacher = new Teacher(['labubu', 'pilates']);
//console.log(teacher);