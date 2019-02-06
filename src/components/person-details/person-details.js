import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner/';

import './person-details.css';


export default class PersonalDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false   
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) this.updatePerson();
    }

    onContentLoaded = (person) => this.setState({person, loading:false});     
    
    updatePerson = () => {
        this.setState({ loading: true });
        const { personId } = this.props;
        if (!personId) return;

        this.swapiService            
            .getPerson(personId)
            .then(this.onContentLoaded);           
    }

    render() {
        const { person, loading } = this.state;
        
        if (!person) return <span>Select a person from a list</span>;
        
        const { id, name, gender, birthYear, eyeColor } = person;        

        if (loading) return <Spinner />

        return (
            <div className="person-details card">
                <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="character" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );

    }
    
};
