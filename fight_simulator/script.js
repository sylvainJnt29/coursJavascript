// Création de la classe Personnage
let calculDegats = 0;
class Personnage{
        constructor(pseudo,classe,sante,attaque,niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
        get informations(){
        return this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est au niveau " + niveau + " .";
    }

        evoluer(){
        niveau++; 
        console.log(pseudo + " passe au niveau " + niveau);
        }

        verifierSante(){
            if(sante <= 0){
                sante = 0;
                console.log(pseudo + " a perdu !");
        }

    }
}

class Magicien extends Personnage {
    constructor(pseudo,classe,sante,attaque){
        super(pseudo,classe,sante,attaque);
    }
    attaquer(personnage){
        
        let calculDegats = personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + calculDegats + " dégats)." );
        this.evoluer();
        this.verifierSante();
    }
    coupSpecial(personnage){
        calculDegats = personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son coup spécial " + calculDegats + " dégats." );
        this.evoluer();
        this.verifierSante();
    }
}

class Guerrier extends Personnage {
    constructor(pseudo,classe,sante,attaque){
        super(pseudo,classe,sante,attaque);
    }
    attaquer(personnage){
        
        let calculDegats = personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + calculDegats + " dégats)." );
        this.evoluer();
        this.verifierSante();
    }
    coupSpecial(personnage){
        calculDegats = personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son coup spécial " + calculDegats + " dégats." );
        this.evoluer();
        this.verifierSante();
    }
}

// var gandalf = new Magicien("Gandalf","magicien",170,90);
// var conan = new Guerrier("Mirouf","magicien",5000,230);

// // gandalf.attaquer(conan);

// conan.coupSpecial(gandalf);

    var gandalf = new Magicien('Gandalf');
    var thor    = new Guerrier('Thor');
    console.log(thor.informations);
    console.log(gandalf.informations);
    gandalf.attaquer(thor);
    console.log(thor.informations);
    thor.attaquer(gandalf);
    console.log(gandalf.informations);
    gandalf.coupSpecial(thor);