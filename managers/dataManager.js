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
		this.time = null;
	}

	setCurrentCity(city) {
		this.currentCity = city;
	}

	showCityInfo(city) {
        this.currentCity = city;
        this.navManager.showCityInfo();
	}

	msToTime(time) {
		this.time = time;
		var //milliseconds = parseInt((time % 1000) / 100),
			seconds = parseInt((time / 1000) % 60),
			minutes = parseInt((time / (1000 * 60)) % 60),
			hours = parseInt((time / (1000 * 60 * 60)) % 24);
			hours = (hours < 10) ? "0" + hours : hours;
			minutes = (minutes < 10) ? "0" + minutes : minutes;
			seconds = (seconds < 10) ? "0" + seconds : seconds;
			
			return hours + ":" + minutes + ":" + seconds; //+ "." + milliseconds;
	}
}