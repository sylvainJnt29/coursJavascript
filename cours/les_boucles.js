//                                      LES BOUCLES

//                                      WHILE
/*
let i = 1;
while(i < 5){
    console.log("Ligne : " +i);
    i++;
}
*/

//                                      DO WHILE
/*
do{
   var prenom = prompt("Quel est votre prénom ?"); //variable globale
} while (prenom == "" || prenom == null);

alert("Bonjour " + prenom);
*/
//                                      FOR
/*
for (let i =1;i < 5;i++) {
    console.log("Ligne : " +i);
}
*/

//                                      CASSER LA BOUCLE : BREAK et CONTINUE

// let i = 0;

// while (i < 5) {
//     if (i == 3) {
//         break;
//     }
//     console.log("Ligne : " + i);
//     i++;
// }
/*
while (i < 5) {
    if (i == 3) {
        i++;
        continue;
    }
    console.log("Ligne : " + i);
    i++;
} 
*/





//                                      FOR ... IN
/*
let panier = ["fraise","banane","poire"];

for (const fruit in panier) {
    console.log(fruit); // On obtient l'index.
}

for (const fruit in panier) {
    console.log(panier[fruit]); // On obtient la valeur.
}

for (const fruit in panier) {
    panier[fruit] = "pomme"; // remplacer
}
console.log(panier);
*/

//                                      FOR ... OF

/*
let panier = ["fraise","banane","poire"];

for (const fruit of panier) {
    console.log(fruit); // On obtient la valeur
}

for (const fruit of panier) {
    console.log(panier.indexOf(fruit)); // On obtient l'index
}
*/

//                                      FOREACH
/*
let listeDePays = ['France','Japon','Irlande','Argentine'];


// for (const pays of listeDePays) {
//     console.log(pays);
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);
// });

listeDePays.forEach(pays => console.log(pays));
*/

