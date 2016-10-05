// geolocation.js
// dependencies: jquery

console.log('javascript sanity check')

function codeAddress() {
	var address = document.getElementById("address").value;
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode( { 'address': address}, function(results, status) {
		var location = results[0].geometry.location;
		alert('LAT: ' + location.lat() + ' LANG: ' + location.lng());
	});
}

//google.maps.event.addDomListener(window, 'load', codeAddress);