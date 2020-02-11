const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 30);
    triceratops = new Dinosaur('triceratops', 'herbivore', 40);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 20);
    stegosaurus2 = new Dinosaur('stegosaurus', 'herbivore', 20);
    dinosaurs = [trex, velociraptor, triceratops];
    park = new Park('Jurassic Park', 50, dinosaurs);
  })

  it('should have a name', function(){
    assert.strictEqual('Jurassic Park', park.name);
  });

  it('should have a ticket price', function(){
    assert.strictEqual(50, park.ticketprice);
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(3, park.dinosaurs.length);
  });

  it('should be able to add a dinosaur to its collection', function(){
    assert.strictEqual(3, park.dinosaurs.length);
    park.addDinosaur(stegosaurus);
    assert.strictEqual(4, park.dinosaurs.length);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    assert.strictEqual(3, park.dinosaurs.length);
    park.removeDinosaur(trex);
    assert.strictEqual(2, park.dinosaurs.length);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.strictEqual(triceratops, park.mostPopularDinosaur());
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(stegosaurus);
    park.addDinosaur(stegosaurus2);
    assert.strictEqual(2, park.dinosaursOfSpecies('stegosaurus').length);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    assert.strictEqual(120, park.totalVisitorsPerDay());
  });

  it('should be able to calculate the total number of visitors per year', function(){
    assert.strictEqual(43800, park.totalVisitorsPerYear());
  });

  it('should be able to calculate total revenue for one year', function(){
    assert.strictEqual(2190000, park.totalRevenuePerYear());
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(stegosaurus);
    park.addDinosaur(stegosaurus2);
    assert.strictEqual(5, park.dinosaurs.length);
    park.removeDinosaurBySpecies('stegosaurus');
    assert.strictEqual(3, park.dinosaurs.length);
  });

  it('should provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
    // console.log(park.diets());
    assert.strictEqual(2, park.diets()['carnivore']);
    assert.strictEqual(1, park.diets()['herbivore']);
  });

});
