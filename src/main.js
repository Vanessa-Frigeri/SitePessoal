import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/index.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';

const Main = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/project" element={<Project/>} />
    </Routes>
  </>
);

export default Main;
