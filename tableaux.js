//                                      LES TABLEAUX

/*
let monTableau = ["un", "deux", "trois", "quatre"];
console.log(monTableau[1]);
console.log(monTableau.length);
console.log(monTableau[monTableau.length - 1]); // Sortir le dernier élément du tableau.


let monTableau2D = [
    ["Jean", "Claude", "Alain"],
    ["dupond", "Martin", "Duc"]
];
console.log(monTableau2D[0][1]);
console.log(monTableau2D[1][2]);


let monTableauAssociatif = {
    "prenom" : "Mark",
    "nom" : "Henry",
    "poste" : "PDG"
};
console.log(monTableauAssociatif["prenom"]);
*/


//                                      AJOUTER UN ELEMENT ( PUSH / UNSHIFT )

/*
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.push("cinq");
monTableau.unshift("zéro");
// console.log(monTableau);

let monTableau2D = [
    ["Jean", "Claude", "Alain"],
    ["dupond", "Martin", "Duc"]
];
monTableau2D[1].push("test");
// console.log(monTableau2D[1]);

let monTableauAssociatif = {
    "prenom" : "Mark",
    "nom" : "Henry",
    "poste" : "PDG"
};
monTableauAssociatif["telephone"] = "0298254565";
console.log(monTableauAssociatif);
*/

//                                      RETIRER UN ELEMENT ( POP / SHIFT )

/*
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.pop();//supprime le dernier élément.
monTableau.shift();//supprime le premier élément.
// console.log(monTableau);


let monTableau2D = [
    ["Jean", "Claude", "Alain"],
    ["dupond", "Martin", "Duc"]
];
monTableau2D[0].pop();
monTableau2D[1].shift();
// console.log(monTableau2D[0]);
// console.log(monTableau2D[1]);


let monTableauAssociatif = {
    "prenom" : "Mark",
    "nom" : "Henry",
    "poste" : "PDG"
};
delete(monTableauAssociatif.poste);
// console.log(monTableauAssociatif);
*/


//                                      Retrouver un élément grâce à sa valeur. ( indexOf )

/*
let monTableau = ["un", "deux", "trois", "quatre"];
console.log(monTableau.indexOf('deux'));
*/

//                                      concatener pour afficher (join)

/*
let monTableau = ["un", "deux", "trois", "quatre"];
console.log(monTableau.join("*:*"));

let monTableau2D = [
    ["Jean", "Claude", "Alain"],
    ["Dupond", "Martin", "Duc"]
];
console.log(monTableau2D[0].join(", "));
*/

//                                      SPLICE ( ajouter remplacer supprimer )

/*
let monTableau = ["un", "deux", "trois", "quatre"];
// monTableau.splice(0,2);
monTableau.splice(0,0,"random","pie");
// console.log(monTableau);


let monTableau2D = [
    ["Jean", "Claude", "Alain"],
    ["Dupond", "Martin", "Duc"]
];

monTableau2D.splice(2,0,['30', '45', '70']);
// console.log(monTableau2D);
console.log(monTableau2D[2]);
*/


//                                      CONCATENER UN TABLEAU ASSOCIATIF


let monTableauAssociatif = {
    "prenom" : "Mark",
    "nom" : "Henry",
    "poste" : "PDG"
};
/*
let chaine = "";

for (const valeur in monTableauAssociatif) {
    chaine += (valeur + " : " + monTableauAssociatif[valeur] + "\n");
}

// console.log(chaine);
*/

function concatener(tableau){
let chaine = "";

    for (const valeur in tableau) {
    chaine += (valeur + " : " + tableau[valeur] + "\n");
    }
    console.log(chaine);
}

concatener(monTableauAssociatif);

