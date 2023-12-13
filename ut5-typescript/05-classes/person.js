var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.createPerson = function () {
        if (!Person.instace) {
            Person.instace = new Person("John");
        }
        return Person.instace;
    };
    return Person;
}());
var person_1 = Person.createPerson();
var person_2 = Person.createPerson();
var person_3 = Person.createPerson();
