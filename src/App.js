import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Image-Container'>
      <div className='Image'>
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      </div>
      <div className='Image-Container'>
      <div className='Image'>
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      <div className='Image' >
        <img src={require('../src/images/pngwing.com.png')} style={{height: '100%', width: '100%'}}/>
      </div>
      </div>
     <div className='Enter-Button-Container'>
        <div className="Enter-Button">
          <p>Enter Here</p>
          </div>
      </div>
    </div>
  );
}

export default App;
