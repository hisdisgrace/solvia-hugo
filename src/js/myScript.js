(function( global ) {
    var Module =
        (function() {
                      
            var data = "secret";
            return {
                scrollTop: 0,
                header: document.getElementById('headerImage'),
                title: document.getElementById('homeTitle'),
                nav: document.getElementById('nav') || null,
                                
                setHeight: function( value, elem ) {
                    return (elem.setAttribute( 'style', 'height:'+value+'px' ));
                }
            };
  })();

    global.Module = Module;
    // Set the initial state
    if(Module.header){ Module.setHeight(window.innerHeight, Module.header); }
    if(Module.nav){ Module.nav.classList.remove("active"); }
    
    window.addEventListener('scroll', function() {
        Module.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        
        if(Module.scrollTop >= 5) {
            if(Module.nav){ Module.nav.classList.add("active"); }
            Module.title.classList.remove('active');
        } else {
            if(Module.nav){ Module.nav.classList.remove("active"); }
            Module.title.classList.add('active');
        }
        
        return Module.scrollTop;
    });
    
})( this );

 function initMap() {
     var rumours = {lat: -26.132337, lng: 27.974625};
     var map = new google.maps.Map(document.getElementById('map-canvas'), {
         center: rumours,
         zoom: 15,
         disableDefaultUI: true,
         styles:[
             {
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#212121"
                     }
                 ]
             },
             {
                 "elementType": "labels.icon",
                 "stylers": [
                     {
                         "visibility": "off"
                     }
                 ]
             },
             {
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#757575"
                     }
                 ]
             },
             {
                 "elementType": "labels.text.stroke",
                 "stylers": [
                     {
                         "color": "#212121"
                     }
                 ]
             },
             {
                 "featureType": "administrative",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#757575"
                     }
                 ]
             },
             {
                 "featureType": "administrative.country",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#9e9e9e"
                     }
                 ]
             },
             {
                 "featureType": "administrative.land_parcel",
                 "stylers": [
                     {
                         "visibility": "off"
                     }
                 ]
             },
             {
                 "featureType": "administrative.locality",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#bdbdbd"
                     }
                 ]
             },
             {
                 "featureType": "poi",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#757575"
                     }
                 ]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#181818"
                     }
                 ]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#616161"
                     }
                 ]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                     {
                         "color": "#1b1b1b"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "geometry.fill",
                 "stylers": [
                     {
                         "color": "#2c2c2c"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#8a8a8a"
                     }
                 ]
             },
             {
                 "featureType": "road.arterial",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#373737"
                     }
                 ]
             },
             {
                 "featureType": "road.highway",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#3c3c3c"
                     }
                 ]
             },
             {
                 "featureType": "road.highway.controlled_access",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#4e4e4e"
                     }
                 ]
             },
             {
                 "featureType": "road.local",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#616161"
                     }
                 ]
             },
             {
                 "featureType": "transit",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#757575"
                     }
                 ]
             },
             {
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#000000"
                     }
                 ]
             },
             {
                 "featureType": "water",
                 "elementType": "labels.text.fill",
                 "stylers": [
                     {
                         "color": "#3d3d3d"
                     }
                 ]
             }
         ]
     });
     var marker = new google.maps.Marker({
         position: rumours,
         map: map
     });
 }