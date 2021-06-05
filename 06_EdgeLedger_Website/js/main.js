function initMap(){
    const loc = { lat: 45.4323561, lng: -75.6882662771348 };
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 12,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map });
}