import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
/* import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Destinations from './pages/Destinations';
 */
import React from 'react';
import Destinations from './pages/Destinations';
const App = () => {
  return (
    <Destinations/>
/*     <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />

        
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetail />} />

            <Route path="/destinations" element={<Destinations />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
 */  
)
};


export default App
