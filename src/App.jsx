import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product';
import SnapNsell from './pages/snapNsell/SnapNsell';
import UserProfile from './pages/user/UserProfile';
import History from './pages/user/History';
// import Login from './pages/Login'
// import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/snapNsell" element={<SnapNsell/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/profileHistory" element={<History/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
