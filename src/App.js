import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acceuil from './Pages/Acceuil'
import Description from './Pages/Description';
import Ajouter from './Pages/Ajouter'


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Acceuil/>}></Route>
        <Route path='/ajouter' element={<Ajouter/>}></Route>
        <Route path='/details' element={<Description/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
