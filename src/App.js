import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
