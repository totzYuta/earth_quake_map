var map;
var dataResults;

function initialize() {
    var latlng = new google.maps.LatLng(35.680865, 139.767036);
    
    map = new google.maps.Map(document.getElementById('mapdisplay'), {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });


}

google.maps.event.addDomListener(window, 'load', initialize);

function toTokyo() {
    map.panTo(new google.maps.LatLng(35.680865, 139.767036));
}

function toShinbashi() {
    map.panTo(new google.maps.LatLng(35.666397, 139,758153));
}
