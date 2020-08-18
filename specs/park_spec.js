const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1, dino2, dino3;
  let park1;
  beforeEach(function () {
    dino1 = new Dinosaur("TRex", "carnivore", 10);
    dino2 = new Dinosaur("Stegasaurus", "herbavore", 5);
    dino3 = new Dinosaur("Triceratops", "herbavore", 15)
    park1 = new Park("Prehistoric Scary Dinosaurs 61", 50, [dino1, dino2])
  });

  it('should have a name', function(){
    const actual = park1.name;
    assert.strictEqual(actual, "Prehistoric Scary Dinosaurs 61");
  });

  it('should have a ticket price', function(){
    const actual = park1.price;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
