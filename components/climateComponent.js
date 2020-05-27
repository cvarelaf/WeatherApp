class ClimateComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);

        this.container.className = 'climateComponent';

        //Create Elements
        this.name = document.createElement('p');
        this.country = document.createElement('p');
        this.time = document.createElement('p'); 
        this.temp = document.createElement('p'); 
        this.pressure = document.createElement('p'); 
        this.humidity = document.createElement('p'); 
        this.main = document.createElement('p');
        this.description = document.createElement('p'); 

        //Add Elements
        this.container.appendChild(this.name);
        this.container.appendChild(this.country);
        this.container.appendChild(this.time);
        this.container.appendChild(this.temp);
        this.container.appendChild(this.pressure);
        this.container.appendChild(this.humidity);
        this.container.appendChild(this.main);
        this.container.appendChild(this.description);


        //Fill Element
        /*
        Estas olvidando que model es un objeto app y ese tiene una relacions con city
        this.id.innerHTML = this.model.id;
        REPLACE FOR
        this.id.innerHTML = this.model.city.id;
        */
        this.name.innerHTML = 'Name: ' + this.model.city.name;
        this.country.innerHTML = 'Country: ' + this.model.city.country;
        this.time.innerHTML = 'Time: ' + dataManager.msToTime(this.model.time);
        this.temp.innerHTML = 'Temperature: ' + this.model.main.temp;
        this.pressure.innerHTML = 'Pressure: ' + this.model.main.pressure;
        this.humidity.innerHTML = 'Humidity: ' + this.model.main.humidity;
        this.main.innerHTML = 'Status: ' + this.model.weather.main;
        this.description.innerHTML = 'Description: ' + this.model.weather.description;
        
        this.container.app = this.model;

    }
}