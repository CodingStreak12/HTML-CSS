function initMap(){
    const loc = { lat: 45.4323561, lng: -75.6882662771348 };
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 12,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map });
}
//Sticky menu background
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        this.document.querySelector('#navbar').style.opacity = 0.9;
    }
    else{
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});