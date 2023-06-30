import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Movies from '../Movies/Movies'
import MenuBar from '../../components/MenuBar/MenuBar';
import myList from '../myList/myList';
export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([])
  return (
    <main className="">
      { user ?
          <>
            <MenuBar/>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<Movies setCart={setCart} cart={cart}/>}/>
              <Route path='/orders' element={<myList cart={cart}/>}/>
              
              {/* Route components in here */}
              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
