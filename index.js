/**
* @name index.js
* @file Add a small description for this file.
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	console.log('App running!');
	//Declare variables
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);
	dataManager.navManager = navManager;

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
				var data = JSON.parse(request.responseText);
					for (var key in data) {
						var appData = data[key];
						var cityData = data[key].city;
						var mainData = data[key].main;
						var windData = data[key].wind;
						var cloudsData = data[key].clouds;
						var weatherData = data[key].weather;
						for(let key = 0; key < appData.length; index++){
							weatherData = data[key].weather;
						}
						console.log(weatherData);
						
						var app = new App(new City(cityData.id, cityData.name, cityData.findname, cityData.country, new Coord(cityData.coord.lon, cityData.coord.lat)), appData.time, new Main(mainData.temp, mainData.pressure, mainData.humidity, mainData.temp_min, mainData.temp_max), new Wind(windData.speed, windData.deg, windData.var_beg, windData.var_end), new Clouds(cloudsData.all), new Weather(weatherData.id, weatherData.main, weatherData.description));

						dataManager.app.push(app);
						console.log(app);
					}
			}else {
					console.log('Server Error');
				}
		}
	}

}