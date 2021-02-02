//                                      Les objets litéraux
/*
let david = {
    prenom: "David", // ceci est une propriété
    nom: "Dupont",
    email: "dddt@orange;fr",

    // A l'ancienne
    sePresenter: function(){
        console.log("Bonjour, je m'appelle " + david.prenom);
    }
}

david.sePresenter();


function recevoirLesCoordonnees(){
    return { latitude:35, longitude:139 }
}
let coordonnees = recevoirLesCoordonnees();
console.log(coordonnees.latitude);
console.log(coordonnees.longitude);
*/

// On crée une fonction constructeur pour les utilisateurs

function Utilisateur(prenom, nom, email){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.sePresenter = () => {
        alert("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse mail : " + this.email );
    }
}

// On crée un objet

var david = new Utilisateur("David","Martin","davmar@laposte.net");
var clementine = new Utilisateur("Clementine","L'arvor","clemlarv@sfr.fr");

console.log(david.prenom + " " + david.nom + " " + david.email);
console.log(clementine.prenom + " " + clementine.nom + " " + clementine.email);
david.sePresenter();
clementine.sePresenter();