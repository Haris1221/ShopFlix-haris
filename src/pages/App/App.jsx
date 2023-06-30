import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Movies from '../Movies/Movies'
import MenuBar from '../../components/MenuBar/MenuBar';
import MyList from '../MyList/MyList';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import Search from '../Search/Search';
import Kids from '../Kids/Kids';
import Setting from '../Setting/Setting';
import Trending from '../Trending/Trending';
import Upcoming from '../Upcoming/Upcoming';
export default function App() {
  const [trending, setTrending]= useState([])
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([])
  return (
    <main className="">
      { user ?
          <>
            <MenuBar/>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<Movies setCart={setCart} cart={cart} setTrending={setTrending}/>}/>
              <Route path='/orders' element={<MyList cart={cart}/>}/>
              <Route path='/trending' element={<Trending movies={trending}/>}/>
              <Route path='/upcoming' element={<Upcoming />}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/kids' element={<Kids/>}/>
              <Route path='/setting' element={<Setting/>}/>
              <Route path="/orders/new" element={<NewOrderPage />} />

              {/* Route components in here */}
               
             {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
