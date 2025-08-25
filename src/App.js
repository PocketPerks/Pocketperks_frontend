
import React from 'react';
import Page from './mycomponent/productdisplay.js/Page';
import DealPage from './mycomponent/productdisplay.js/DealPage';
import HelpPage from './mycomponent/productdisplay.js/HelpPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from './mycomponent/productdisplay.js/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
        
          <Route element={<Page/>} path="/page"></Route>
           <Route element={<DealPage/>} path="/page2"></Route>
           <Route element={<HelpPage/>} path="/page3"></Route>
           <Route element={<ContactUs/>} path="/page4"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
