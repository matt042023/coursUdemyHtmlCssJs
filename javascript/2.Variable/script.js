var nom = "Anthony"; //String
var isPremium = true; // Bouléen
var age = 30; //Intger


// alert("Bonjour " + nom + ", tu es premium (" + isPremium + ") et tu as " + age + " ans");

console.log(nom);
console.log(age);

nom = nom + " Cardinale";

console.log(nom);

nom= "toto";

console.log(nom);


var tab = [1, 5, 8, 12];
console.log(tab)
console.log(tab[1]);
tab[1] = tab[1] * 2;
console.log(tab[1]);
console.log(tab.length);
tab.push(99);
console.log(tab);
tab.pop();
console.log(tab)
const objet = {
    nom: "Anthony",
    age: 30,
    note: [1, 5, 8, 12],
    profession: {
        avant: "Etudiant",
        maintenant: "developpeur"
    }

}
console.log(objet)
console.log(objet.note[2])
console.log(objet.profession.avant);

