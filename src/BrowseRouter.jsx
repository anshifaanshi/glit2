import { BrowserRouter } from 'react-router-dom';
import HeroSection from './HomeComponents/HeroSection';
import About from './About';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Hero section is home */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;
