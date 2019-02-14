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
                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5} />
                <StarshipDetails itemId={9} />
                
                <PersonList>                 
                    { ({name}) => <span>{name}</span> }
                </PersonList>
                
                <StarshipList>                 
                    { ({name}) => <span>{name}</span> }
                </StarshipList>

                <PlanetList>                 
                    { ({name}) => <span>{name}</span> }
                </PlanetList>
                <div className="copyright">Copyright © 2019 Konstantin Modin 
                All Rights Reserved. Designed with React</div>
            </div>
        )        
    };
};