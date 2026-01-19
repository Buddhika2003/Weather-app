let map, directionService, directionRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 7.8731, lng: 80.7718 }
});
    directionService = new google.maps.DirectionsService();
    directionRenderer = new google.maps.DirectionsRenderer({map});
    
    new google.maps.places.Autocomplete(document.getElementById("start"));
    new google.maps.places.Autocomplete(document.getElementById("end"));
}


function calculateRoute(){
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    directionService.route({
        origin: start,
        destination: end,
        travelaMode: "DRIVING",
        provideRouteAlternatives: true
   },(result, status) => {
    if(status == "OK"){
        directionRenderer.setDirections(result);
        showRouteOptions(result.routes);
    }
   });
}

function showRouteOptions(routes){
    routes.forEach((route, index) => {
        console.log(`Route ${index+1}: ${route.legs[0].distance.text}`); 
    });
}
window.onload = initMap;


