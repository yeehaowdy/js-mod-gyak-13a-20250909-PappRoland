//person
export default class Person{
    _name;

    constructor(name){
        this._name = name;

    }
    get name(){
        return this._name;

    }

    set name(name){
        this._name = name;

    }
}
//test
let person = new Person('john guy');
console.log(person.name);