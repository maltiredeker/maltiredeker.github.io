import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';
import Design from './pages/Design';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
