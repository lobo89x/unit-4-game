// Globals 
var punch = 0;
var counter = 20;

var player;
var computer;
var turtles = [];

// creating fighter info
function fighter(n[]) {
    this.name = n[0];
    this.punchpoint = n[1];
    this.counterpoint = n[2];
    this.sprite = n[3];
    this.health = n[4];
};


// fill the select array
function fighterselect() {
    var leo = new fighter("Leo", 55, 35, "./assets/images/leo.png", 500);
    var rap = new fighter("Raph", 60, 25, "./assets/images/raph.png", 550);
    var don = new fighter("Donnie", 35,42, "./assets/images/don.png", 450);
    var mike = new fighter("Mikey", 40, 20, "./assets/images/mike.png", 650);
    turtles.push(leo, rap, don, mike);
};


