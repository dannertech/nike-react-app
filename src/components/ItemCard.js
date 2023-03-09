import React from 'react';
import '../App.css';
import styled from 'styled-components';

//styled components
const Button = styled.button`
color: black;
font-weight: bold;
background-color: transparent;
border-style: none;
`

const ItemCard = ({image, cost, title}) => {
    return(
        <div id="ItemCard">
            <div id="ItemCardContainer">
                <h1 style={{color: 'white'}}>{title}</h1>
                <img src={image} id="ItemCardImage" />
                <h3>{`$${cost}`}</h3>
                <div style={{width: '100%', backgroundColor: 'white', height: '10%'}}>
                    <Button>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;