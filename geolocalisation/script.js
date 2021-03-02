// Vérifier que la géolocalisation soit disponible

if ('geolocation' in navigator){

    // getCurrentPosition() ou watchPosition()
    // success, error, options

    let options = {
        enableHighAccuracy: true//,
        // maximumAge: 10000
        // timeout: 10000
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        // alert("Latitude :" + position.coords.latitude + "\n Longitude : " + position.coords.longitude);
    },error,options);

    function error() {
        alert('Vous avez refusé la géolocalisation.');
    }

}
else{
    alert("La géolocalisation ne peut être utilisée.");
}