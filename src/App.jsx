import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import ImageUpload from './Component/ImageUpload';
import FirstPage from './Component/FirstPage';

function App() {
  return (
    <Router>
     <div>
     <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/imageupload' element={<ImageUpload />} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;
