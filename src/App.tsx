import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";

import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" richColors />

      <MainLayout>
        <Suspense fallback={<div className="p-6">A carregar...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/projectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}
