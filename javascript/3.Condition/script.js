var nom = "Anthony";
var isPremium = true;
var age = 25;

// if(age>18) {
//     console.log("Tu es majeur");
// } else {
//     console.log("Tu es mineur");
// }

if(age < 5) {
    console.log("Tu as moins de 5 ans");
} else if (age >= 15){
    console.log("Tu as au moins 15 ans");
}else {
    console.log("Tu as entre 5 et 15 ans");
};

if(nom != "" ) {
    // nom pas vide
};

if(isPremium || age > 18) {
    console.log("Voila le catalogue premium");
};

if(isPremium && age > 18) {
    console.log("Voila le catalogue premium");
};

if(age === 25) {
    console.log("25 ans");
};

