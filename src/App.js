import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Signup from './components/signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/about" element={<About />} ></Route>
        <Route exact path="/contact" element={<Contact />} ></Route>
        <Route exact path="/login" element={<Login />} ></Route>
        <Route exact path="/signup" element={<Signup />} ></Route>
      </Routes>

    </Router>
  );
}

export default App;
