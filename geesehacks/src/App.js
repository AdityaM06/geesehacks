import './App.css';
import Home from './pages/Home.tsx';
import TradePage from './pages/TradePage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.tsx'; 
import VideoCard from './pages/VideoCard.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/video" element={<VideoCard />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
