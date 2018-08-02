class CityComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'cityComponent';


        //Create Elements
        this.id = document.createElement('h1');
        this.name = document.createElement('p');
        this.country = document.createElement('p');
        this.climateBtn = document.createElement('button');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.name);
        this.container.appendChild(this.country);
        this.container.appendChild(this.climateBtn);

        //Fill Element
        /*
        Estas olvidando que model es un objeto app y ese tiene una relacions con city
        this.id.innerHTML = this.model.id;
        REPLACE FOR
        this.id.innerHTML = this.model.city.id;
        */
        this.id.innerHTML = this.model.city.id;
        this.name.innerHTML = 'Name: ' + this.model.city.name;
        this.country.innerHTML = 'Country: ' + this.model.city.country;
        this.climateBtn.innerHTML = 'View Climate';
        this.climateBtn.onclick = this.climateBtnClick.bind(this);

        this.container.app = this.model;
        console.log(this.model);
    }

    climateBtnClick(e) {
        this.dataManager.showCityInfo(this.model);
        console.log('Showing ' + this.model.city.name + '\'s Climate');
    }
}