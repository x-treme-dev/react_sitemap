import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} /> /*  http://localhost:5173/ */ 
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
