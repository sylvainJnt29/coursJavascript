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

//                                       On crée une fonction constructeur pour les utilisateurs

/*
function Utilisateur(prenom, nom, email){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
}
Utilisateur.prototype.sePresenter = function() {
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse mail : " + this.email );
    }

// On crée un objet

var david = new Utilisateur("David","Martin","davmar@laposte.net");
var clementine = new Utilisateur("Clementine","L'arvor","clemlarv@sfr.fr");

// console.log(david.prenom + " " + david.nom + " " + david.email);
// console.log(clementine.prenom + " " + clementine.nom + " " + clementine.email);
// david.sePresenter();
// clementine.sePresenter();

david.poste = "Responsable des ventes";

// console.log(david);
// console.log(clementine);

function Logement(type, annee, placeDeParking, propriétaire){
    this.type = type;
    this.annee = annee;
    this.placeDeParking = placeDeParking;
    this.propriétaire = propriétaire;
}

var appartementA = new Logement('Appartement', 2014, true, david); // david est un objet

// console.log(appartementA.propriétaire.prenom);
// console.log(appartementA);



//                                      Les prototypes

// __proto__


//                                      Créer un objet avec Object()

var monObjet = new Object();
monObjet.titre = "Le titre de l'objet";
// console.log(monObjet);

david.sePresenter();
clementine.sePresenter();
*/


//                                      L'héritage


/*
// Animal(nombreDePattes,poids)
function Animal(nombreDePattes,poids){
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}

Animal.prototype.presentation = function(){
    console.log("Cet animal possède " + this.nombreDePattes + " pattes, et fait " + this.poids + ".");
}

// Oiseau (nombreDePattes,poids /longueurDesAiles)
function Oiseau(nombreDePattes, poids,longueurDesAiles){
    Animal.call(this, nombreDePattes, poids);
    // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre (this) on donne l'objet 
    // actuel, ensuite, on donne les arguments de son constructeur.
    this.longueurDesAiles = longueurDesAiles;
}

Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau; 

// Mammifere(nombreDePattes,poids / typeDePoils)
function Mammifere(nombreDePattes,poids,typeDePoils){
    Animal.call(this,nombreDePattes,poids)
    this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2,"1kg","grandes");

// console.log(perroquet);
perroquet.presentation();


// var lapin = new Mammifere(4,"2.5kg","court");
// console.log(lapin);
*/

//                                  Bind, Call et Apply

// Call et Apply permettent d'invoquer immédiatement une fonction.

// Animal.call(this, nombreDePattes, poids);
/*
let gandalf = { titre : "Magicien" }

function direBonjour(arme,degats) { 
    console.log("Bonjour " + this.titre + " , vous possédez " + arme + " qui donne " + degats + " points de dégât(s) !");
 }
 direBonjour.call(gandalf,"un bâton",80); // On appelle l'objet gandalf
//  direBonjour.apply(gandalf,["un bâton",80]); 
*/


// Bind
// Ojectif : changer le contexte de "this".

/*
this.valeur = "window";

let monObjet = {
    valeur: "Objet",
    getValeur: function(){
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;

maValeur(); // On obtient "window" dans la console 

let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // sert à appliquer un nouveau contexte

maValeurAvecBind();
*/


//                                     Créer un objet avec une classe et un constructeur

/*
class Utilisateur {
    constructor(prenom, nom,email){
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    }

    sePresenter() {
        console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse mail " + this.email + " .");
    }
}
var loic = new Utilisateur("loic","raison","loicatoujoursraison@sfr.fr");
loic.sePresenter();*/


/*
// Challenge
class Animal {
    constructor(nom,nombreDePattes,poids){
        this.nom = nom;
        this.nombreDePattes = nombreDePattes;
        this.poids = poids;
    }
    presentationDeLAnimal(){
        console.log("Je vous présente " + this.nom + " , il possède " + this.nombreDePattes + " patte(s), et pèse " + this.poids + " kilo(s).");
    }
}

class Oiseau extends Animal{
    constructor(nom, nombreDePattes, poids, longeurDesAiles){
        super(nom,nombreDePattes,poids); // Appelle la classe animal
        this.longeurDesAiles = longeurDesAiles;
    }
    voler(){
        console.log("L'oiseau vole !");
    }
}

var tutule = new Animal ("Tutule la Tarentule", 8, 1);
// tutule.presentationDeLAnimal();
var lanlan = new Oiseau ("Lanlan le Goeland",2,5,"moyennes");
console.log(lanlan);
lanlan.presentationDeLAnimal();
lanlan.voler();
*/

//                                          Getters et Setters


class Utilisateur {
    constructor(prenom, nom, email){
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    }

    get nomComplet(){
        return this.prenom + " " + this.nom;
    }

    set nomComplet(valeur){
        [this.prenom,this.nom] = valeur.split(" "); // divise une chaine de charactères à partir d'un séparateur pour faire un tableau.
    }

    sePresenter() {
        console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse mail " + this.email + " .");
    }
}
var loic = new Utilisateur("loic","raison","loicatoujoursraison@sfr.fr");
// loic.sePresenter();
console.log(loic.nomComplet);
loic.nomComplet= "Alex Térieur";
console.log(loic.nomComplet);

