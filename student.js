//student
import Person from "./person";

export default class Student extends Person{
    _marks = [];
    
    constructor(marks){
        super();
        var addMarks = [5,4,5];
        this._marks = [...addMarks, ...marks];

    }
      get marks(){
        return this._marks;

    }

    set marks(value){
        this._marks = value;

    }
}

//test task 4
//let student = new Student([]);
//console.log(student);
