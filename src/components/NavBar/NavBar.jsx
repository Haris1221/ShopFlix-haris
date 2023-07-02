import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import {motion} from 'framer-motion'
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav 
    
    
    className='nav'>
      <div className='menuProfile' onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>
      <img className="navAvatar" src={user.profilePic} alt="Netflix Logo"></img>
      <p><span>{user.name}</span></p>
      </div>
      
      <div className='navItem'>
      
      <Link to="/"><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>🎥  &nbsp; &nbsp; &nbsp; Browse</p></Link>
      <Link to="/trending"><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>📈  &nbsp; &nbsp; &nbsp; Trending</p></Link>
      <Link to="/upcoming"><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>👀  &nbsp; &nbsp; &nbsp; Upcoming</p></Link>
      <Link to="/search"><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>🔎  &nbsp; &nbsp; &nbsp; Search</p></Link>
      <Link to="/list"><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>＋  &nbsp; &nbsp; &nbsp; My List</p></Link>

      </div>
      
      
      <div className='navSettings'>
      <Link to="/setting" onClick=""><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>Settings</p></Link>
      <Link to="" onClick={handleLogOut}><p onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>Exit Netflix</p></Link>

      </div>

    </nav>
  );
}