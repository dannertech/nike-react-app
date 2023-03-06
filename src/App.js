import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Image'>
        <img src={require('../src/images/pngwing.com.png')} id="Lebron-Image"/>
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
