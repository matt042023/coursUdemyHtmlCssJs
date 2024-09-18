var nom = "Anthony";
var isPremium = true;
var age = 25;
let nb = 0;

function DireBonjour() {
    alert("Bonjour");
};

function DireBonjourParam(p) {
    alert("Bonjour " + p);
};

function LogNbClicks(){
    nb++;
    console.log(nb);
}

// DireBonjourParam(nom);