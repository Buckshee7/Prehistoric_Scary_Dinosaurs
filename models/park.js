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


module.exports = Park;