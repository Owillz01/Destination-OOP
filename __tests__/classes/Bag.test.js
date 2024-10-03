const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

const { describe, it, test, expect } = require("@jest/globals");

let weight, id, owner, bag

beforeEach(() => {
  // Initialize the properties and the object before each test case
  weight = 23;
  id = 11234
  owner = null
  bag = new Bag(weight, id, owner);
});

test('creats an instance of Bag', () =>{
    expect(bag).toBeInstanceOf(Bag);
} )

test('weight and id is corretly assigned', () => {
    expect(weight).toBe(23)
    expect(id).toBe(11234);
})

test("checks owner init as null", () => {
  expect(owner).toBe(null);
});

test("can get bag owner", () => {
  expect(bag.getOwner()).toBe(null);
});

test("update owner", () => {
    let name = 'Herald'
    let destination = 'London'
    let person = new Person(name, destination);
    bag.assignOwner(person)
  expect(bag.getOwner()).toBe(person);
});

