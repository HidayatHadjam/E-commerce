import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Description from './Pages/Description';
import Ajouter from './Pages/Ajouter'


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Description/>}></Route>
        <Route path='/ajouter' element={<Ajouter/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
