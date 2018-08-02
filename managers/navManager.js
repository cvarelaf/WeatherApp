class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.cityComponent = document.getElementById('cityComponent');
        this.climateComponent = document.getElementById('climateComponent');
    }

    showCities() {
        /*
        //Tu version, estas pasando this.dataManager.app como model.
        this.dataManager.app.forEach(app => {
            var cityComponent = new CityComponent(this.dataManager.app, this.cityComponent, this.dataManager);
        });
        this.showCityInfo();
        */

        this.dataManager.app.forEach(app => {
            var cityComponent = new CityComponent(app, this.cityComponent, this.dataManager);
        });
        this.showCityInfo();
    }

    showCityInfo() {
        if (this.dataManager.currentCity) {
            this.climateComponent.innerHTML = '';
            this.climateComponent.innerHTML = 'Climate';
            this.dataManager.currentCity.forEach(city => {
                var climateComponent = new ClimateComponent(this.dataManager.app, this.climateComponent, this.dataManager);
            });
        }
    }

}