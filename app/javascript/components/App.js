import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}
