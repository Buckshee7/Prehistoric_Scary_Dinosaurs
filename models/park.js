const Park = function(name, price, dinosaurs=[]){
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function(){
    this.dinosaurs.pop();
};

Park.prototype.mostVisitors = function(){
    if (this.dinosaurs.length > 0){
        let most = this.dinosaurs[0];
        for (let i = 1; i < this.dinosaurs.length; i++){
            if (this.dinosaurs[i].guestsAttractedPerDay > most.guestsAttractedPerDay){
                most = this.dinosaurs[i];
            };
        };
        return most
    };
};

Park.prototype.allOfSpecies = function(species){
    const listToReturn = [];
    for (let dino of this.dinosaurs){
        if (dino.species === species){
            listToReturn.push(dino);
        };
    };
    return listToReturn
};

Park.prototype.dailyVisitors = function(){
    let total = 0;
    for (let dino of this.dinosaurs){
        total += dino.guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.yearlyVisitors = function(){
    const daily = this.dailyVisitors();
    return daily*365;
};


Park.prototype.yearlyRevenue = function(){
    const yearly = this.yearlyVisitors();
    return yearly*this.price;
};

Park.prototype.removeAll = function(species){
    let toKeep = [];
    for (let dino of this.dinosaurs){
        if (dino.species !== species){
            toKeep.push(dino);
        };
    };
    this.dinosaurs = toKeep;
};

Park.prototype.summary = function(){
    let summary = { carnivore: 0, herbivore: 0, omnivore: 0 };
    for (let dino of this.dinosaurs){
        summary[dino.diet] += 1;
    };
    return summary;
};

module.exports = Park;