var y = document.getElementsByName("calle")

$(document).ready(function(){
    $("#1").click(function(){
        $("button").show();
        $("p").show();
        $("#map").show();
    })
    $("#0").click(function(){
        $("button").hide();
        $("p").hide();
        $("#map").hide();
    })
});

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myMap);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function myMap(position) {
  var myCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  google.maps.event.addListener(marker,'click',function() {
    var pos = map.getZoom();
    map.setZoom(16);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {map.setZoom(pos);},3000);
  });
}
