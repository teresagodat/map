
var locations = [
	{
		"name": "Ireland",
		"lat": 53.3548,
		"lng": -6.2517,
		"zoom": 18
	},

	{
		"name": "Mexico",
		"lat": 21.097, 
		"lng": -105.798,
		"zoom": 18
	}, 

	{
		"name": "Bahamas",
		"lat": 24.442, 
		"lng": -80.134,
		"zoom": 18
	},

	{
		"name": "Hawaii",
		"lat": 20.646, 
		"lng": -157.022,
		"zoom": 18
	}];

var map;
function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 53.3548, lng: -6.2517},
		zoom: 8
	});

$('#vaclocation').on('change', changeLocation);

function changeLocation() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];


	if(locations) {
		map.setCenter({lat: locations.lat, lng: locations.lng});
		map.setZoom(locations.zoom);	
	 }
  } 
}

