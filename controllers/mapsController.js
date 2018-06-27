const axios = require('axios');

// const LATLONG = "@47.6918452,-122.2226413";
const LATLONG = "32.2226,110.9747";
const APIKEY = "AIzaSyD_2mmRZkUnIuOqeIxJRjKZjDadVGB1i0E";


module.exports = {
	// (trying to set the LATLONG const. to the the User location via geolocation)
	// getLocation: function (req, res) {
	// 	axios.post("https://maps.googleapis.com/maps/api/js?key=" + APIKEY + "&callback=initMap")
	// 		.then((data) => {
	// 			console.log(data.data);
	// 			res.json(data.data)
	// 		})
	// },
	queryMap: function (req, res) {
		axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=" + req.params.query + "&location=" + LATLONG + "&radius=1500&type=restaurant&key=" + APIKEY)
			.then((data) => {
				console.log(data.data);
				res.json(data.data)
			})
	}
}