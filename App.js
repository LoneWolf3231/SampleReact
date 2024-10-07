import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import TableOfContents from './Components/TableOfContents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contents" element={<TableOfContents />} />
      </Routes>
    </Router>
  );
}

export default App;
