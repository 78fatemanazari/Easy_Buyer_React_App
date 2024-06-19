import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/Shop';
import Carts from './pages/cart/Carts';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav /> 
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Carts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
