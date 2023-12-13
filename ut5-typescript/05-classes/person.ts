class Person {
  static instace: Person;

  private constructor(private name: string) {}

  static createPerson(): Person {
    if (!Person.instace) {
      Person.instace = new Person("John");
    }
    return Person.instace;
  }
}

const person_1 = Person.createPerson();
const person_2 = Person.createPerson();
const person_3 = Person.createPerson();
