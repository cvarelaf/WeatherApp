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
        this.id.innerHTML = this.model.id;
        this.name.innerHTML = 'Name: ' + this.model.name;
        this.country.innerHTML = 'Country: ' + this.model.country;
        this.climateBtn.innerHTML = 'View Climate';
        this.climateBtn.onclick = this.climateBtnClick.bind(this);

        this.container.app = this.model;
    }

    climateBtnClick(e) {
        this.dataManager.showCityInfo(this.model);
        console.log('Showing ' + this.model.name +'\'s Climate');
	}
}