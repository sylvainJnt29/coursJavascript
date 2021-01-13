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

let i = 0;

// while (i < 5) {
//     if (i == 3) {
//         break;
//     }
//     console.log("Ligne : " + i);
//     i++;
// }

while (i < 5) {
    if (i == 3) {
        i++;
        continue;
    }
    console.log("Ligne : " + i);
    i++;
} 