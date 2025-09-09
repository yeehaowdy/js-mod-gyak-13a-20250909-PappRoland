//student
import Person from "./person";

export default class Student extends Person{
    _marks = [];
    
    constructor(marks){
        super();
        var addMarks = [5,4,5];
        this._marks = [...addMarks, ...marks]

    }
      get marks(){
        return this._marks;

    }

    set marks(marks){
        this._marks = marks;

    }
}

//test task 4
let student = new Student([]);
console.log(student);
