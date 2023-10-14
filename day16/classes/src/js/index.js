class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

const person1 = new Person('Daniel', 'Slezak')

console.log(person1.firstName);
console.log(person1.getFullName());