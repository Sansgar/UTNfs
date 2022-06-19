import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/Home';
import ContactoPage from './pages/Contacto';
import EventosPage from './pages/Eventos';
import GaleriaPage from './pages/Galeria';
import NosotrosPage from './pages/Nosotros';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Contacto' element={<ContactoPage/>}/>
        <Route path='Eventos' element={<EventosPage/>}/>
        <Route path='Galeria' element={<GaleriaPage/>}/>
        <Route path='Nosotros' element={<NosotrosPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
