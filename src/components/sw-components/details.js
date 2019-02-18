import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithDataDetails } from '../hoc-helper/';
import { withSwapiService } from '../hoc-helper';


const personWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} id="25" field="gender" label="Gender" />
                <Record {...props} id="26" field="eyeColor" label="Eye Color" /> 
            </Wrapped>
        );
    };
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson
    };
};

const planetWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} id="31" field="population" label="Population" />
                <Record {...props} id="32" field="rotationPeriod" label="Rotation Period" />
                <Record {...props} id="33" field="diameter" label="Diameter" />
            </Wrapped>
        );
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    };
};

const starshipWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} id="43" field="model" label="Model" />
                <Record {...props} id="44" field="length" label="Length" />
                <Record {...props} id="45" field="costInCredits" label="Cost" />
            </Wrapped>
        );
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship
    };
};

const PersonDetails = withSwapiService(
                        WithDataDetails(personWithRecord(ItemDetails)),
                        mapPersonMethodsToProps);

const PlanetDetails = withSwapiService(
                        WithDataDetails(planetWithRecord(ItemDetails)),
                        mapPlanetMethodsToProps);

const StarshipDetails = withSwapiService(
                            WithDataDetails(starshipWithRecord(ItemDetails)),
                            mapStarshipMethodsToProps);

export { PersonDetails, PlanetDetails, StarshipDetails };