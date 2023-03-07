import './App.css';

function App() {
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
        <div className="Enter-Button">
          <p id='Enter-Button-Text'>Just Do It</p>
          </div>
      </div>
    </div>
  );
}

export default App;
