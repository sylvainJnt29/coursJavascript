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