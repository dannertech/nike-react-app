
import React from 'react';
import {createBrowserRouter, RouterProvider, BrowserRouter, Router, Route, Routes} from 'react-router-dom';

import Main from '../src/screens/Main';
import Total from '../src/screens/Total';
import Home from '../src/screens/Home';


function App() {
  return (
   <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inventory' element={<Main />}/>
        <Route path='/total' element={<Total />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
