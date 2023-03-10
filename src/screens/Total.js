import React, {useContext} from 'react';
import '../App.css';
import Header from '../components/Header.js';
import { Context } from '../context/CartContext';

const Total = () => {
    const cartContext = useContext(Context);

    console.log(cartContext.state.total);
    return(
        <div>
            <Header />
            <div id='Total-Page-Column'>
                <img src={require('../images/nike-mona-lisa.png')} style={{height: '20vh', width: '35vw'}}/>
                <h1 style={{fontWeight: 'bold', fontSize: 70}}>Total</h1>
                <h1>Total here</h1>
                <h1>{`$${cartContext.state.total}`}</h1>
            </div>
        </div>
    )
}
export default Total;