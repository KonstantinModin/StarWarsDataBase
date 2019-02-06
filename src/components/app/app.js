import React, {Component} from 'react';
// import React-DOM from 'react-DOM';

import StarshipDetails from '../starship-details';
import PlanetDetails from '../planet-details';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonalDetails from '../person-details';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonalDetails />
                    </div>
                </div>
                <div className="copyright">Copyright © 2019 Konstantin Modin 
                All Rights Reserved. Designed with React</div>
            </div>
        )        
    };
};