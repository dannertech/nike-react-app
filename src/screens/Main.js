import '../App.css'
import React, {useContext} from 'react';
import ItemCard from '../components/ItemCard';
import inventory from '../api/data';
import Header from '../components/Header';
import { Context } from '../context/CartContext';


const Main = () => {

    
    return (
        <div style={{backgroundColor: 'white', overflow: 'auto', marginTop: -16}}>
            <Header />
            <div id="ItemCardsContainer">
            {inventory.map((item) => {
                return <ItemCard image={item.image} title={item.title} cost={item.cost} key={Math.floor(Math.random() * 1234567890)}/>
            })}
            </div>
        </div>
    )
};

export default Main;