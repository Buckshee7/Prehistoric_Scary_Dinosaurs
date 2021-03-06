const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1, dino2, dino3;
  let park1;
  beforeEach(function () {
    dino1 = new Dinosaur("TRex", "carnivore", 10);
    dino2 = new Dinosaur("Stegasaurus", "herbivore", 5);
    dino3 = new Dinosaur("TRex", "carnivore", 15)
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

  it('should have a collection of dinosaurs', function(){
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDino(dino3);
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.removeDino();
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park1.addDino(dino3)
    const actual = park1.mostVisitors();
    assert.deepStrictEqual(actual, dino3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park1.addDino(dino3)
    const actual = park1.allOfSpecies("TRex");
    assert.deepStrictEqual(actual, [dino1, dino3]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park1.dailyVisitors();
    assert.strictEqual(actual, 15);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park1.yearlyVisitors();
    assert.strictEqual(actual, 5475);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park1.yearlyRevenue();
    assert.strictEqual(actual, 273750)
  });


  it("should be able to remove all dinosaurs of a species", function(){
    park1.addDino(dino3);
    park1.removeAll("TRex");
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dino2]);
  })

  it("Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type", function(){
    park1.addDino(dino3);
    let actual = park1.summary();
    assert.deepStrictEqual(actual, { 'carnivore': 2, 'herbivore': 1, 'omnivore': 0 })
  });

});
