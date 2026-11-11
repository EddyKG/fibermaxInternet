import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Plans from './components/plans';
import Coverage from './pages/Coverage';
import Terms from './pages/terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plans" element={<Plans />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
