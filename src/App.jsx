import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Component/Form.jsx';
import ImageUpload from './Component/ImageUpload.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/imageupload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;