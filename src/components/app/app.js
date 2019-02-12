import React, {Component} from 'react';

import StarshipDetails from '../starship-details';
import PlanetDetails from '../planet-details';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import Row from '../row';

import SwapiService from '../../services/swapi-service';
import './app.css';

export default class App extends Component {
    
    swapiService = new SwapiService();

    state = {
        
    };    
    
    render() {
        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                item={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>

        );

        const starshipDetails = (
            <ItemDetails 
                item={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>
        );

        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />
                {/* <PeoplePage />                */}
                <Row
                    left={personDetails}
                    right={starshipDetails} />
              
                <div className="copyright">Copyright © 2019 Konstantin Modin 
                All Rights Reserved. Designed with React</div>
            </div>
        )        
    };
};