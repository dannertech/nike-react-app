import '../App.css'
import React from 'react';
import ItemCard from '../components/ItemCard';
import inventory from '../api/data';
import Header from '../components/Header';

const Main = () => {
    return (
        <div style={{backgroundColor: 'white', overflow: 'auto', marginTop: -16}}>
            <Header />
            <div id="ItemCardsContainer">
            {inventory.map((item) => {
                return <ItemCard image={item.image} title={item.title} cost={item.cost}/>
            })}
            </div>
        </div>
    )
};

export default Main;