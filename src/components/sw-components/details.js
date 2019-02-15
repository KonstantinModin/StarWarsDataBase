import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithDataDetails } from '../hoc-helper/';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship } = swapiService;

const personWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} field="gender" label="Gender" />
                <Record {...props} field="eyeColor" label="Eye Color" /> 
            </Wrapped>
        );
    };
};

const planetWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} field="population" label="Population" />
                <Record {...props} field="rotationPeriod" label="Rotation Period" />
                <Record {...props} field="diameter" label="Diameter" />
            </Wrapped>
        );
    };
};  

const starshipWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} field="model" label="Model" />
                <Record {...props} field="length" label="Length" />
                <Record {...props} field="costInCredits" label="Cost" />
            </Wrapped>
        );
    };
};

const PersonDetails = WithDataDetails(personWithRecord(ItemDetails), getPerson); 
const PlanetDetails = WithDataDetails(planetWithRecord(ItemDetails), getPlanet);
const StarshipDetails = WithDataDetails(starshipWithRecord(ItemDetails), getStarship);

export { PersonDetails, PlanetDetails, StarshipDetails };