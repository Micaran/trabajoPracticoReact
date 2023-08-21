import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Todo from './toDo/ToDo';
import FetchList from './fetchList/FetchList';
import './App.css';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/todo" element={<Layout><Todo /></Layout>} />
          <Route path="/fetchlist" element={<Layout><FetchList /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
