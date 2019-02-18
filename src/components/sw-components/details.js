import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithDataDetails } from '../hoc-helper/';
import { withSwapiService } from '../hoc-helper';


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

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson
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

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
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