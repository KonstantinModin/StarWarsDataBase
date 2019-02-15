import React from 'react';

import ErrorButton from '../error-button';

import './item-details.css';

const Record = (props) => {
    const { item, field, label} = props;
    
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

const ItemDetails = (props) => {    
    const { image, name, children, item } = props;
    
    return (
        <div className="item-details card">
            <img className="item-image"
                src={image}
                alt="item" />
            <div className="card-body">
                <h4>{name}</h4>
                 <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
                <ErrorButton />
            </div>
        </div>
    );
};

export default ItemDetails;
