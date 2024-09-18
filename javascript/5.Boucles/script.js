let cpt = 100;
const tab = ["A", "B", "C", "D", "E"];
let tab2 = [2, 4, 6, 8, 10];

for(i=0 ; i<10 ; i++){
    console.log(i)
}

for(i=0 ; i<tab.length ; i++){
    console.log(i +"=" + tab[i])
}

while(cpt > 0) {
    console.log(cpt);
    cpt--;
}

function Mult(t) {
    for(i=0 ; i<tab2.length ; i++) {
        t[i] = t[i] *2;
    }
}

console.log(tab2)
Mult(tab2)
console.log(tab2)
Mult(tab2)
console.log(tab2)