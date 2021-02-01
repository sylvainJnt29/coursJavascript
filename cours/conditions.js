//                                  LES CONDITIONS IF / ELSE
/*


// let heure = 18;

// if(heure < 12){
//     alert("C'est le matin");
// } else if (heure <18) {
//     alert("C'est l'après midi");
// } else {
//     alert("C'est la soirée");
// }

let nom = prompt("C'est quoi ton nom, cowboy ?");
function verificationMajorite(age){
    if(age<18){
        alert(nom + ", vous devez être majeur pour utiliser ce site.");
    } else if (age<21){
        alert(nom + " , vous pouvez utiliser ce site mais vous ne pourrez jouer de l'argent.");
    } else {
        alert("Bienvenue  " + nom + " !");
    }
}
let x = prompt("Saisissez vote âge :");
verificationMajorite(x);

*/

//                                  CONDITION SWITCH
/*
// let consommable = "carotte";
// let consommable = "pomme";
// let consommable = "poireau";
 let consommable = "yaourt";

switch(consommable){
    case "carotte":
    case "pomme de terre":
    case "poireau":
        console.log("Ceci est un légume.");
        break;

    case "pomme": 
        console.log("Ceci est un fruit.");
        break;
    
    default :
        console.log("Consommable inconnu.");
}   
*/

//                                  OR et AND || ou &&
/*
let gareDeDepart = "Lyon";
let gareDarrivee = "Brest";
let chauffeur = "Jean";

// if (gareDeDepart != "" && gareDarrivee != "") {
    if ((gareDeDepart != "Lyon" || gareDarrivee != "Paris") && chauffeur != ""){
    console.log("Le train va démarrer.");
} else {
    console.log("Le train ne peut pas démarrer.");
}
*/

//                                       NOT   ( ! )
/*
let x = 7;
if(!x<5){
    console.log("X est inférieur à 5.");
} else {
    console.log("x n'est pas inférieur à 5.");
}
*/

//                                 LES CONDITIONS TERNAIRES

// let x = 2;

//[CONDITION] ? [TRUE] : [FALSE];

// x>3 ? console.log("x est supérieur à trois.") : console.log("x est inférieur à trois.");

// if (x>3){
//     console.log("x est supérieur à trois.");
// } else{
//     console.log("x est inférieur à trois.");
// }


let gareDeDepart = "Lyon";
let gareDarrivee = prompt("Où souhaitez vous aller?") || "Gare du Nord";
let chauffeur = "Jean";

// if (gareDeDepart != "" && gareDarrivee != "") {
    if ((gareDeDepart != "Lyon" || gareDarrivee != "Paris") && chauffeur != ""){
    alert("Le train va démarrer à destination de " + gareDarrivee + " .");
} else {
    alert("Le train ne peut pas démarrer.");
}
