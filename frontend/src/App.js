import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </section>
  );
}

export default App;
