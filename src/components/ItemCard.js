import React from 'react';

const ItemCard = ({image, cost, title}) => {
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <img src={image}/>
                <h3>{cost}</h3>
            </div>
        </div>
    )
};

export default ItemCard;