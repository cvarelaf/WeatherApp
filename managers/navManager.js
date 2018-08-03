class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.cityComponent = document.getElementById('cityComponent');
        this.climateComponent = document.getElementById('climateComponent');
    }

    showCities() {
        //Se usa el app como model ya que tiene todos los datos necesarios [no this.dataManager.app]
        this.cityComponent.innerHTML = 'City List:<br>\n<br>\n';
        this.dataManager.app.forEach(app => {
            var cityComponent = new CityComponent(app, this.cityComponent, this.dataManager);
        });
        this.showCityInfo();
    }

    showCityInfo() {
        this.climateComponent.innerHTML = 'Climate Information:';
        var climateComponent = new ClimateComponent(this.dataManager.currentCity, this.climateComponent, this.dataManager);
    }
}