import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
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
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />

                    <PersonDetails item={11}/>
                    <PlanetDetails item={4}/>
                    <StarshipDetails item={9}/>                    
                    
                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>                 
                        
                    <div className="copyright">Copyright © 2019 Konstantin Modin 
                    All Rights Reserved. Designed with React</div>
                </div>
            </SwapiServiceProvider>
        )        
    };
};