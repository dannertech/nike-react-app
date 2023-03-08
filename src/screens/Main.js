import '../App.css'
import React from 'react';
import ItemCard from '../components/ItemCard';
import inventory from '../api/data';

const Main = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <div id="ItemCardsContainer">
            {inventory.map((item) => {
                return <ItemCard image={item.image} title={item.title} cost={item.cost}/>
            })}
            </div>
        </div>
    )
};

export default Main;