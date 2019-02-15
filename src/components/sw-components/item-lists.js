import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helper';

import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        console.log('withChildFunction props=', props);
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const personRenderName = ({ name, birthYear }) => <span>{name}, was born in {birthYear}</span>;
const planetRenderName = ({ name, diameter }) => <span>{name}, diameter is {diameter} km</span>;
const starshipRenderName = ({ name, model }) => <span>{name}, model {model}</span>;

const PersonList = withData(withChildFunction(ItemList, personRenderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, planetRenderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, starshipRenderName), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};