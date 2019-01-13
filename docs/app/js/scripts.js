//google maps api

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
        user1.style.backgroundColor='black';
        user1.style.color='white';
        user2.style.backgroundColor='#A9A9A9';
        user2.style.color='black';
        user3.style.backgroundColor='#A9A9A9';
        user3.style.color='black';
        user4.style.backgroundColor='#A9A9A9';
        user4.style.color='black';
        user5.style.backgroundColor='#A9A9A9';
        user5.style.color='black';
        user6.style.backgroundColor='#A9A9A9';
        user6.style.color='black';
    });

    google.maps.event.addListener(marker2, 'click', function () {
        user1.style.backgroundColor='#A9A9A9';
        user1.style.color='black';
        user2.style.backgroundColor='black';
        user2.style.color='white';
        user3.style.backgroundColor='#A9A9A9';
        user3.style.color='black';
        user4.style.backgroundColor='#A9A9A9';
        user4.style.color='black';
        user5.style.backgroundColor='#A9A9A9';
        user5.style.color='black';
        user6.style.backgroundColor='#A9A9A9';
        user6.style.color='black';
    });

    google.maps.event.addListener(marker3, 'click', function () {
        user1.style.backgroundColor='#A9A9A9';
        user1.style.color='black';
        user2.style.backgroundColor='#A9A9A9';
        user2.style.color='black';
        user3.style.backgroundColor='black';
        user3.style.color='white';
        user4.style.backgroundColor='#A9A9A9';
        user4.style.color='black';
        user5.style.backgroundColor='#A9A9A9';
        user5.style.color='black';
        user6.style.backgroundColor='#A9A9A9';
        user6.style.color='black';
    });

    google.maps.event.addListener(marker4, 'click', function () {
        user1.style.backgroundColor='#A9A9A9';
        user1.style.color='black';
        user2.style.backgroundColor='#A9A9A9';
        user2.style.color='black';
        user3.style.backgroundColor='#A9A9A9';
        user3.style.color='black';
        user4.style.backgroundColor='black';
        user4.style.color='white';
        user5.style.backgroundColor='#A9A9A9';
        user5.style.color='black';
        user6.style.backgroundColor='#A9A9A9';
        user6.style.color='black';
    });

    google.maps.event.addListener(marker5, 'click', function () {
        user1.style.backgroundColor='#A9A9A9';
        user1.style.color='black';
        user2.style.backgroundColor='#A9A9A9';
        user2.style.color='black';
        user3.style.backgroundColor='#A9A9A9';
        user3.style.color='black';
        user4.style.backgroundColor='#A9A9A9';
        user4.style.color='black';
        user5.style.backgroundColor='black';
        user5.style.color='white';
        user6.style.backgroundColor='#A9A9A9';
        user6.style.color='black';
    });

    google.maps.event.addListener(marker6, 'click', function () {
        user1.style.backgroundColor='#A9A9A9';
        user1.style.color='black';
        user2.style.backgroundColor='#A9A9A9';
        user2.style.color='black';
        user3.style.backgroundColor='#A9A9A9';
        user3.style.color='black';
        user4.style.backgroundColor='#A9A9A9';
        user4.style.color='black';
        user5.style.backgroundColor='#A9A9A9';
        user5.style.color='black';
        user6.style.backgroundColor='black';
        user6.style.color='white';
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


// navigation slide-in
$(window).load(function() {
  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});
// first-flexslider
$(window).load(function() {
  $('#firstSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: false,
    start: function() {
      $.waypoints('refresh');
    }
  });
});
// second-flexslider
$(window).load(function() {
  $('#secondSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    touch: false,
  });
});
$('.prev, .next').on('click', function() {
  var href = $(this).attr('href');
  $('#secondSlider').flexslider(href)
  return false;
})
// waypoints
$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInUpD');
  }, {
    offset: '75%'
  });

});
// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
// fancyBox
$(document).ready(function() {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 450,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
});
