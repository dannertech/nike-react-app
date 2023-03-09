import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


//styled components
const Button = styled.button`
background-color: transparent;
color: white;
font-weight: bold;
font-size: 30px;
border-style: none;
`

const Header = () => {
    const navigate = useNavigate();
    return(
        <div id="Header">
            <img src={require('../images/nike-white-logo.png')} style={{height: '50%', width: '10%', marginTop: '3%', marginLeft: '3%'}}/>
            <Button onClick={() => navigate('/total')} id="Header-Button">Go To Total</Button>
            
        </div>
    )
};

export default Header;