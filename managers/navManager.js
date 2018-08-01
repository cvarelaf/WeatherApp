/**
* @name NavManager
* @extends
* @file navManager.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/

class NavManager {

	constructor(dataManager) {
		this.dataManager = dataManager;
		this.cityComponent = document.getElementById('cityComponent');
	}

	showCities() {
		this.dataManager.bees.forEach(bee => {
			var beeCompoment = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});

		this.showBeePosts();
	}

	showCityInfo() {
		this.dataManager.currentCity.info.forEach(info => {
			var cityComponent = new CityComponent(info, this.cityComponent, this.dataManager);
		});
	}
}