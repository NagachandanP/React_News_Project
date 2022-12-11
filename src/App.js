import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import { background, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NoteState from './context/NoteState';





function App() {


  return (


    <NoteState>
      <Router>
        <Header />

        <Routes>
          {/* <div>Hiiiiiiii</div> */}
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <Footer />
      </Router>

    </NoteState>
  );
}

export default App;


