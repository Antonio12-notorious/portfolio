import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" richColors />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/projectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
