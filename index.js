/**
* @name index.js
* @file Add a small description for this file.
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	console.log('App running!');
	//1. Declare variables
	//2. Initialize variables
	//3. Program Logic
	loadWeather();

	function loadWeather() {
		var request = new XMLHttpRequest();
		request.open('GET', 'json/weather.json', true);
		request.onreadystatechange = loadWeatherCallback;
		request.send();
	}

	function loadWeatherCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var weatherData = JSON.parse(request.responseText);
				console.log(weatherData);


			}
		}
	}

	// function requestUsersDataCompleted(e) {
	// 	var request = e.target;

	// 	if (request.readyState === XMLHttpRequest.DONE) {
	// 		if (request.status === 200) {
	// 			var data = JSON.parse(request.responseText);
	// 			for (var key in data) {
	// 				var beeData = data[key];
	// 				var addressData = data[key].address;

	// 				var geo = new Geo(addressData.geo.lat, addressData.geo.lng);

	// 				var address = new Address(addressData.city, geo, addressData.street, addressData.suite, addressData.zipcode);

	// 				var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, beeData.phone, new Address(addressData.city, new Geo(addressData.geo.lat, addressData.geo.lng), addressData.street, addressData.suite, addressData.zipcode));
	// 				dataManager.bees.push(bee);
	// 			}

	// 			requestUserPosts();
	// 			//HACK
	// 			dataManager.setCurrentBee(dataManager.bees[1]);
	// 		}
	// 		else {
	// 			console.log('Server Error');
	// 		}
	// 	}
	// }
}