import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import CarList from './components/CarList/CarList';

function App() {
  return (
    <>
      <Container className="cs-app-container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cars" element={<CarList />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>

    </>
  );
}

export default App;



