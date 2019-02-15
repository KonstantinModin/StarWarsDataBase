import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page';
// import ItemList from '../item-list/';
import ItemDetails, { Record } from '../item-details/item-details';
// import Row from '../row';
import SwapiService from '../../services/swapi-service';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';


import './app.css';

export default class App extends Component {
    
    swapiService = new SwapiService();

    state = {
        
    };    
    
    render() {     
        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <PersonDetails item={11}>
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />        
                </PersonDetails>

                <PlanetDetails item={5}>
                    <Record field="population" label="Population" />
                    <Record field="rotationPeriod" label="Rotation Period" />
                    <Record field="diameter" label="Diameter" />                
                </PlanetDetails>

                <StarshipDetails item={9}>
                    <Record field="model" label="Model" />
                    <Record field="length" label="Length" />
                    <Record field="costInCredits" label="Cost" />                
                </StarshipDetails>
                
                <PersonList/>
                <StarshipList/>
                <PlanetList/>                 
                    
                <div className="copyright">Copyright © 2019 Konstantin Modin 
                All Rights Reserved. Designed with React</div>
            </div>
        )        
    };
};