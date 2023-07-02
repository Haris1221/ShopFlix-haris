import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Movies from '../Movies/Movies'
import MenuBar from '../../components/MenuBar/MenuBar';
import MyList from '../myList/myList';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import Search from '../Search/Search';
import Kids from '../Kids/Kids';
import Setting from '../Setting/Setting';
import Trending from '../Trending/Trending';
import Upcoming from '../Upcoming/Upcoming';
export default function App() {
  const [trending, setTrending]= useState([])
  const [user, setUser] = useState(getUser());
  return (
    <main className="">
      { user ?
          <>
            <MenuBar user={user}/>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<Movies  setTrending={setTrending}/>}/>
              <Route path='/list' element={<MyList />}/>
              <Route path='/trending' element={<Trending movies={trending}/>}/>
              <Route path='/upcoming' element={<Upcoming />}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/kids' element={<Kids/>}/>
              <Route path='/setting' element={<Setting/>} setUser={setUser}/>
              <Route path="/orders/new" element={<NewOrderPage />} />

              {/* Route components in here */}
               
             {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} user={user}/>
      }
    </main>
  );
}
