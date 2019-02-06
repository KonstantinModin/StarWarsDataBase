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
    
    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });       
    };
    
    render() {
        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonalDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className="copyright">Copyright © 2019 Konstantin Modin 
                All Rights Reserved. Designed with React</div>
            </div>
        )        
    };
};