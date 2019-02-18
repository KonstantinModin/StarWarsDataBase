import React from 'react';

import './item-list.css';

const ItemList = (props) => { 

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);
        
        return (
            <li className="list-group-item"
                key={Math.floor(Math.random()*1000+1)}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items.slice(0, 5)}
        </ul>
    );
};

export default ItemList;