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

window.onload = initMap;

