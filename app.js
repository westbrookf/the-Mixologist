//Google Maps api starts here

function initMap(){
  var options = {
    zoom: 8,
    center: {lat:38.5935655,lng:-90.229932}
  }

  var map = new google.maps.Map(document.getElementById('maps'), options);

  //Marker
  var marker = new google.maps.Marker({
    position:{lat:38.5935655,lng:-90.22993},
    map:map
  });
}