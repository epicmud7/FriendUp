       
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    zoom: 17,

                    center: new google.maps.LatLng(51.5340, 0.0850),
					
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#96d4f4"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#E74C3C"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"color":"#F39C12"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#F39C12"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#96d4f4"},{"visibility":"on"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('googleMap');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'FriendFinder!'
                });
            }
     var myDataRef = new Firebase('https://vivid-torch-4282.firebaseio.com');
      myDataRef.on("value", function(snapshot) {
  console.log(snapshot.val().users);
          for(i=0; i<snapshot.val().users.length; i++) {
           document.getElementById("fireBase").innerHTML += "<li>" + snapshot.val().users[i] + " -  "+ snapshot.val().interests[i] + "</li>";   
          }
          //document.getElementById("fireBase").innerHTML = JSON.stringify(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});