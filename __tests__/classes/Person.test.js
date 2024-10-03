const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");
const { describe, it, test, expect } = require("@jest/globals");

let name, destination, person;

beforeEach(() => {
    name = "Herald";
    destination = 'London'

    person = new Person(name, destination);
})

describe('Person', ()=> {
    test("can create an instance of the Person", ()=>{
        expect(person).toBeInstanceOf(Person)
    })

    test("name and destination have been assigned correctly", () => {
      expect(person.name).toBe("Herald");
      expect(person.destination).toBe("London");
    });

     test("bags initializes as an empty array", () => {
       expect(person.getBags().length).toBe(0);
     });

     test("addBag adds a bag to the bags array", () => {
        let bag = new Bag(13, 2987);
        person.addBag(bag);
       expect(person.getBags().length).toBe(1);
     });
})