import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importamos Routes en lugar de BrowserRouter
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTACIONES DE PAGINAS Y COMPONENTES
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Cierra el menú hamburguesa
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src="logo.png" alt="Pintor" width="40" height="40" className="logo" />
            Carlos Cantero - Pintor
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
          <Link to="/galeria" onClick={closeMobileMenu}>Galeria de Trabajos</Link>
          <Link to="/contacto" onClick={closeMobileMenu}>Contacto</Link>
          <Link to="/acerca-de" onClick={closeMobileMenu}>Acerca de</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

// const Inicio = () => <h1>Inicio</h1>;
// const Galeria = () => <h1>Galeria de Trabajos</h1>;
// const Contacto = () => <h1>Contacto</h1>;
// const AcercaDe = () => <h1>Acerca de</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Utilizamos el componente Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
      <ToastContainer />
    </Router>
    
  );
};

export default App;



