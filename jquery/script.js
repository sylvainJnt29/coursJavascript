//                                      Avec Javascript
/*
document.querySelector('h1');
document.querySelectorAll('p');

document.querySelector('h1').textContent = "Bonjour avec JavaScript";

document.querySelectorAll('p').textContent = "Ceci est un paragraphe"; // Impossible,
// car on ne peut modifier plusieurs éléments sans passer par une boucle.

document.querySelector('.maClass').innerHTML = "<p><b>HTML modifié !</b></p>";


//                                      Avec jQuery

$('h1'); // On donne le sélecteur CSS
$('p'); // On selectionne tous les paragraphes

$('h1').text("Bonjour avec jQuery"); 
// $('p').text("Ceci est un paragraphe."); 

$('.maClass').html('<p><b>HTML modifié avec jQuery !</b></p>')
*/

//                                      Modifier le style d'un élément

//                                      Avec Javascript

// document.querySelector('h1').style.color = 'orange';
// document.querySelector('#monId').className = 'important';
// document.querySelector('#monId').className = 'important'; impossible
// document.querySelector('p').style.color = 'purple'; impossible

//                                      Avec jQuery

/*
$('h1').css('color','blue');
$('#monId').addClass('important');
$('#monId').removeClass('important');
$('p').css('color','purple');
*/

//                                      Ajouter et supprimer un élément


//                                      Avec Javascript
/*
document.querySelector('h1').prepend("Oh : ");
document.querySelector('h1').append(" !");
document.querySelectorAll('p');

//                                      Avec jQuery

 $('h1').prepend("Ha : ");
 $('h1').append(" *!*");
 $('h1').before('<div>Hello</div>');
 $('h1').after('<div>the end</div>');
//  $('p').remove();
*/

//                                      Modifier les attributs d'un élément

/*
//                                      Avec Javascript

document.querySelector('h1').getAttribute('class');
document.querySelector('h1').setAttribute('style','text-transform: lowercase');

document.querySelectorAll('p');

//                                      Avec jQuery

$('h1').attr('class'); // sélectionner un attribut
$('h1').attr('style','text-transform: lowercase');
$('h1').after('<a href= "https://wikipedia.com">Wikipedia</a>');
$('a').attr('href','http://sylvain-janot.fr');
$('p');
*/


//                                      Ajouter des évènements


//                                      Avec Javascript

// document.querySelector('h1').addEventListener('click',() => {
//     document.querySelector('h1').style.color = 'gray';
// });

/*
for(let i = 0; i < 2; i++){
    document.querySelectorAll('p')[i].addEventListener('click', () => {
        document.querySelector('h1').style.color = "red";
    })
}
*/


//                                      Avec jQuery

/*
// $('h1').click(() => {
//     $('h1').css('color','ivory');
// });

$('p').click(() => {
    $('h1').css('color','green')
});


$('h1').on('mouseover', () => {
    $('#monId').addClass('important');
});

*/


//                                  Faire une requête AJAX avec jQuery et JavaScript


/*
const url = "https://blockchain.info/ticker";

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        $('h1').text(data.EUR.last + 'euros');
    },
    error: () => {
        alert("Merci de revenir plus tard !");
    }
});

const url_bis = "https://lesoublisdelinfo.com/api.php";

$.ajax({
    url: url_bis,
    type: 'POST',
    data: 'prenom=John',
    dataType : 'json',
    success: (data) => {
        $('#monId').text(data.resultat);
    },
    error: () => {
        alert("Erreur, merci de revenir plus tard !");
    }
});
*/

//                                      Ajouter des animations

$('h1').hide();
$('h1').show();

// $('p').click(() => {
//     $('h1').hide();
// });

$('p').click(() => {
    // $('h1').toggle();
    // $('h1').fadeOut();
    // $('h1').fadeToggle();
    // $('h1').slideToggle();

    // $('h1').animate({
    //     opacity: .7,
    //     margin: 30
    // });

    $('h1').slideUp().slideDown().animate({opacity: .7,margin: 30});
    
});