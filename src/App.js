import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Homepage from './containers/Homepage/homepage';
import Product from './containers/product/Product';
import Resources from './containers/Resources/Resources';
import Bookademo from './containers/Bookademo/Bookademo';
import Subpage1 from './containers/Subpage/Subpage1';
import Subpage2 from './containers/Subpage/Subpage2';
import Subpage3 from './containers/Subpage/Subpage3';
import Subpage4 from './containers/Subpage/Subpage4';
import Subpage5 from './containers/Subpage/Subpage5';
import Subpage6 from './containers/Subpage/Subpage6';
import Subpage7 from './containers/Subpage/Subpage7';
import Aboutus from './containers/Aboutus/Aboutus';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='product' element={<Product />} />
          <Route path='resources/:id' element={<Resources/>} />
          <Route path='bookademo' element={<Bookademo/>} />
          <Route path='subpage1' element={<Subpage1/>} />
          <Route path='aboutus' element={<Aboutus/>} />
          <Route path='subpage2' element={<Subpage2/>}/>
          <Route path='subpage3' element={<Subpage3/>}/>
          <Route path='subpage4' element={<Subpage4/>}/>
          <Route path='subpage5' element={<Subpage5/>}/>
          <Route path='subpage6' element={<Subpage6/>}/>
          <Route path='subpage7' element={<Subpage7/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
