
var map, infoWindow;
var user1 = document.getElementsByClassName("card")[0];
var user2 = document.getElementsByClassName("card")[1];
var user3 = document.getElementsByClassName("card")[2];
var user4 = document.getElementsByClassName("card")[3];
var user5 = document.getElementsByClassName("card")[4];
var user6 = document.getElementsByClassName("card")[5];
console.log(user1);
function initMap(listener) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        var options = {enableHighAccuracy: true, timeout: 600000000, maximumAge: 0};
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };


            let marker = new google.maps.Marker({
                map: map,
                position: pos,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }
            });

            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        }, options
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    let marker1 = new google.maps.Marker({
        map: map,
        position: {lat: 43.472309, lng:-80.541951},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    let marker2 = new google.maps.Marker({
        map: map,
        position: {lat: 43.471165, lng:-80.540470},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    let marker3 = new google.maps.Marker({
        map: map,
        position: {lat: 43.4692112, lng:-80.540502},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    let marker4 = new google.maps.Marker({
        map: map,
        position: {lat: 43.472699, lng:-80.535980},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    let marker5 = new google.maps.Marker({
        map: map,
        position: {lat: 43.469561, lng:-80.546258},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    let marker6 = new google.maps.Marker({
        map: map,
        position: {lat: 43.468339, lng:-80.541602},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    google.maps.event.addListener(marker1, 'click', function () {
        user1.style.backgroundColor='#f4511e';
        user2.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user3.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user4.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user5.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user6.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    });

    google.maps.event.addListener(marker2, 'click', function () {
        user1.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user2.style.backgroundColor='#f4511e';
        user3.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user4.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user5.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user6.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    });

    google.maps.event.addListener(marker3, 'click', function () {
        user1.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user2.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user3.style.backgroundColor='#f4511e';
        user4.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user5.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user6.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    });

    google.maps.event.addListener(marker4, 'click', function () {
        user1.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user2.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user3.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user4.style.backgroundColor='black';
        user5.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user6.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    });

    google.maps.event.addListener(marker5, 'click', function () {
        user1.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user2.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user3.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user4.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user5.style.backgroundColor='#f4511e';
        user6.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    });

    google.maps.event.addListener(marker6, 'click', function () {
        user1.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user2.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user3.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user4.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user5.style.backgroundColor='rgba(0, 0, 0, 0.5)';
        user6.style.backgroundColor='#f4511e';
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

