import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
