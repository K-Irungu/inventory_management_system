import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

    </Router>
  );
}

export default App;
