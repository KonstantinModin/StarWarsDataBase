import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li> 
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: false,
        image: null   
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) this.updateItem();
    }

    // onContentLoaded = (item) => {
        
    //     };     
    
    updateItem = () => {
        this.setState({ loading: true });
        const { item, getData, getImageUrl } = this.props;
        if (!item) return;
        console.log('item=', item);
        getData(item)
            .then((item) => {
                this.setState({
                    item, 
                    loading:false,
                    image: getImageUrl(item)
                    });
            });           
    }

    render() {
        const { item, loading, image } = this.state;
        
        if (!item) return <span>Select a item from a list</span>;
        
        const { id, name, gender, birthYear, eyeColor } = item;        

        if (loading) return <Spinner />
        
        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="item" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );

    }
    
};
