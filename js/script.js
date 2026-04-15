function initMap() {
    const lillyHQ = { lat: 39.7598, lng: -86.1578 }; 
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: lillyHQ,
        mapTypeId: 'terrain', // Custom Map Type
        gestureHandling: "cooperative" // Cooperative scrolling
    });

    const marker = new google.maps.Marker({
        position: lillyHQ,
        map: map,
        title: "Eli Lilly Headquarters",
        animation: google.maps.Animation.BOUNCE 
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Eli Lilly & Co.</h3><p>Software Engineering Internship: Enterprise app deployment.</p>"
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}