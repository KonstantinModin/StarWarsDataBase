export default class SwapiService {
    
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recieved ${res.status}`);
        }                
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }    
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }    
    
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }    
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getPersonImage = (id) => {
        return (
            `${this._imageBase}/characters/${id}.jpg`
        )
    }
    getStarshipImage = (id) => {
        return (
            `${this._imageBase}/starships/${id}.jpg`
        )
    }
    getPlanetImage = (id) => {
        return (
            `${this._imageBase}/planets/${id}.jpg`
        )
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {        
        const i = this._extractId(planet);        
        return {
            id: i,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            image: this.getPlanetImage(i)
        }
    };
    _transformPerson = (person) => {        
        const i = this._extractId(person);        
        return {
            id: i,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            image: this.getPersonImage(i)
        }
    };

    _transformStarship = (starship) => {        
        const i = this._extractId(starship);       
        return {
            id: i,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
            image: this.getStarshipImage(i)
        }
    };
}