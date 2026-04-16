function initMap() {
    console.log("initMap is starting...");
    const lillyHQ = { lat: 39.7598, lng: -86.1578 }; 
    // Select the div with id="map"
    const mapElement = document.getElementById("map");
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: lillyHQ,
            mapTypeId: 'roadmap',
            mapTypeControl: true
        });

        const marker = new google.maps.Marker({
            position: lillyHQ,
            map: map,
            title: "Eli Lilly Headquarters",
            animation: google.maps.Animation.DROP
        });
        
        console.log("Map initialized successfully.");
    } else {
        console.error("Map element not found!");
    }
}
window.initMap = initMap;