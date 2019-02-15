import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {        
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const personRenderName = ({ name, birthYear }) => <span>{name}, was born in {birthYear}</span>;
const planetRenderName = ({ name, diameter }) => <span>{name}, diameter is {diameter} km</span>;
const starshipRenderName = ({ name, model }) => <span>{name}, model {model}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = withSwapiService(
                        withData(withChildFunction(ItemList, personRenderName)), 
                        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                        withData(withChildFunction(ItemList, planetRenderName)),
                        mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
                        withData(withChildFunction(ItemList, starshipRenderName)),
                        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};