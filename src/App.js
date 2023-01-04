import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
