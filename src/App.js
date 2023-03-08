import './App.css';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import styled from 'styled-components';



function App() {
  //hooks
  const navigate = useNavigate();

  //styled components
const Button = styled.button`
background-color: white;
height: 100%;
width: 15%;
border-radius: 70px;
font-weight: bold;
text-align: center;
`;

//individual screen functionality
function enterButtonClick(){
 navigate('/inventory');
};

  return (
    <div className='App'>
      <div className='Image-Container'>
      <div className='Image'>
        <img src={require('../src/images/pngegg.png')} style={{height: '60%', width: '100%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngegg-2.png')} style={{height: '50%', width: '60%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngegg-3.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      </div>
      <div className='Image-Container'>
      <div className='Image'>
        <img src={require('../src/images/pngegg-4.png')} style={{height: '70%', width: '80%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngegg-5.png')} style={{height: '60%', width: '60%', 
      }}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngegg-7.png')} style={{height: '80%', width: '100%'}}/>
      </div>
      </div>
     <div className='Enter-Button-Container'>
        <Button onClick={() => enterButtonClick()}>Just Do It</Button>
      </div>
    </div>
  );
}

export default App;
