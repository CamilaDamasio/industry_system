import React from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import RawMaterials from './pages/RawMaterials';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/raw-materials' element={<RawMaterials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
