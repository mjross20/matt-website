import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experience from './pages/Experience'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/" exact element={<Home/>} />
          <Route path= "/experience" exact element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
