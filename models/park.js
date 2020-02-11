const Park = function (name, ticketprice, dinosaurs) {
  this.name = name;
  this.ticketprice = ticketprice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  var index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaur, 1);
};

Park.prototype.mostPopularDinosaur = function () {
  // I'm sure there is a better way to do this
  // like calculating the max value among an array of guestsAttractedPerDay
  // but it works so I'll leave it for now.
  let mostpopular;
  for (i=0; i<this.dinosaurs.length-1; i++) {
    if(dinosaurs[i].guestsAttractedPerDay < dinosaurs[i+1].guestsAttractedPerDay){
      mostpopular = dinosaurs[i+1]
    }
  }
  return mostpopular;
};

Park.prototype.dinosaursOfSpecies = function (species) {
  let result = this.dinosaurs.filter(dinosaur => dinosaur.species == species);
  return result;
};

Park.prototype.dinosaursPerDiet = function (diet) {
  let result = this.dinosaurs.filter(dinosaur => dinosaur.diet == diet);
  return result;
};

Park.prototype.totalVisitorsPerDay = function() {
  let totalvisitors = 0;
  for(dinosaur of this.dinosaurs) {
    totalvisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalvisitors;
};

Park.prototype.totalVisitorsPerYear = function(){
  return (365*this.totalVisitorsPerDay());
};

Park.prototype.totalRevenuePerYear = function(){
  return (this.ticketprice*this.totalVisitorsPerYear());
};

Park.prototype.removeDinosaurBySpecies = function(species){
  const dinosaurswithoutremoved = this.dinosaurs.filter(dinosaur => dinosaur.species != species);
  this.dinosaurs =  dinosaurswithoutremoved;
};

Park.prototype.diets = function () {
  const diets = [];
  const dinosaursperdiet = {};
  for(dinosaur of this.dinosaurs){
    if(!diets.includes(dinosaur.diet)){
      diets.push(dinosaur.diet);
    }
  }
  for(diet of diets){
    dinosaursperdiet[diet] = this.dinosaursPerDiet(diet).length;
  }
  return dinosaursperdiet;
};

module.exports = Park;
