//                                      Les evenements

/*
// 1 ere methode
let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = function() {
//     if(confirm('Etes vous sûr ?')){
//         location.href="https://sylvain-janot.fr"
//     }
// }

// avec une fonction flechee

a.onclick = () => {
    if(confirm('Etes vous sûr ?')){
        location.href="https://sylvain-janot.fr"
    }
}

button.onmouseover = () => {
    document.body.style.backgroundColor = "orange";
}

button.onmouseout = () => {
    document.body.style.backgroundColor = "white";
}
*/


//                                      Via le gestionnaire d'evenements

/*
let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', () => {
    if(confirm('Etes vous sûr ?')){
        location.href = "https://sylvain-janot.fr";
    }
});

button.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "orange";
});

function backgroundWhite(){
    document.body.style.backgroundColor = "white";
}

button.addEventListener('mouseout', backgroundWhite);

button.addEventListener('mouseout', () =>{
    document.body.style.fontFamily = "arial";
});

button.removeEventListener('mouseout', backgroundWhite);
*/

//                                      Gerer la propagation des evenements

/*
let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', () => {
    alert('article cliqué');
});

h1.addEventListener('click', (e) => {
    alert('titre cliqué');
    e.stopPropagation();
});
*/


//                                      Planifier l'execution d'un script
/*
// setTimeout
// setTimeout("alert('Bonjour !')", 3000);

let timer = setTimeout("alert('Bonjour !')", 3000);
clearTimeout(timer); 

// setInterval
//setInterval("alert('Bonjour !')", 5000);

let interval = setInterval("alert('Bonjour !')", 5000);
clearInterval(interval);
*/






// https://developer.mozilla.org/fr/docs/Web/Events