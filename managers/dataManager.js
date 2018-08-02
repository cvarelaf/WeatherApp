/**
* @name DataManager
* @extends
* @file dataManager.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/
class DataManager {

	constructor() {
		this.app = [];
		this.currentCity = null;
		this.navManager = null;
	}

	setCurrentCity(city) {
		this.currentCity = city;
	}

	showCityInfo(city) {
		this.currentCity = city;
		this.navManager.showCityInfo();
	}

	addWeather(weather) {
        this.app.forEach(function (app) {
            app.weather.push(weather);
            return;
        });
    }

}