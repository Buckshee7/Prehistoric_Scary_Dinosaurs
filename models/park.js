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

module.exports = Park;