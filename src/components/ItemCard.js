import React from 'react';
import '../App.css';

const ItemCard = ({image, cost, title}) => {
    return(
        <div id="ItemCard">
            <div id="ItemCardContainer">
                <h1 style={{color: 'white'}}>{title}</h1>
                <img src={image} id="ItemCardImage" />
                <h3>{`$${cost}`}</h3>
            </div>
        </div>
    )
};

export default ItemCard;