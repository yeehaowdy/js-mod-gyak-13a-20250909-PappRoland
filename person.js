//person
export default class Person{
    _name;

    constructor(name){
        this._name = name;

    }
    get name(){
        return this._name;

    }

    set name(value){
        this._name = value;

    }
}
//test task 2
//let person = new Person('john guy');
//console.log(person.name);