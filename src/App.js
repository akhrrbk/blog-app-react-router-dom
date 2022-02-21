import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App;
