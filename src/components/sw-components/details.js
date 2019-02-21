import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithDataDetails } from '../hoc-helper/';
import { withSwapiService } from '../hoc-helper';


const personWithRecord = (Wrapped) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                <Record {...props} field="birthYear" label="Birth Year:" /> 
                <Record {...props} field="gender" label="Gender:" />
                <Record {...props} field="height" label="Height:" /> 
                <Record {...props} field="mass" label="Mass:" /> 
                <Record {...props} field="eyeColor" label="Eye Color:" /> 
                <Record {...props} field="skinColor" label="Skin Color:" /> 
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
                <Record {...props} field="diameter" label="Diameter:" />
                <Record {...props} field="rotationPeriod" label="Rotation Period:" />
                <Record {...props} field="orbitalPeriod" label="Orbital Period:" />
                <Record {...props} field="population" label="Population:" />
                <Record {...props} field="climate" label="Climate:" />
                <Record {...props} field="gravity" label="Gravity:" />
                <Record {...props} field="terrain" label="Terrain:" />
                <Record {...props} field="surfaceWater" label="Surface Water:" />
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
                <Record {...props} field="model" label="Model:" />
                <Record {...props} field="length" label="Length:" />
                <Record {...props} field="costInCredits" label="Cost:" />                
                <Record {...props} field="speed" label="Speed:" />
                <Record {...props} field="crew" label="Crew:" />
                <Record {...props} field="passangers" label="Passangers:" />
                <Record {...props} field="cargoCapacity" label="Cargo Capacity:" />
                <Record {...props} field="cons" label="Consumables:" />
                <Record {...props} field="mglt" label="MGLT:" />
            </Wrapped>
        );
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship
    };
};

const PersonDetails = withSwapiService(mapPersonMethodsToProps)(
                        WithDataDetails(
                            personWithRecord(ItemDetails)));

const PlanetDetails = withSwapiService(mapPlanetMethodsToProps)(
                        WithDataDetails(
                            planetWithRecord(ItemDetails)));

const StarshipDetails = withSwapiService(mapStarshipMethodsToProps)(
                            WithDataDetails(
                                starshipWithRecord(ItemDetails)));

export { PersonDetails, PlanetDetails, StarshipDetails };