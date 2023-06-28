import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='nav'>
      <div className='menuProfile' onClick={()=>{document.querySelector('.nav').style.display='none';document.querySelector('.menuBar').style.display='flex'}}>
      <img class="navAvatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix Logo"></img>
      <p><span>{user.name}</span></p>
      </div>
      
      <div className='navItem'>
      
      <Link to="/"><p>🎥  &nbsp; &nbsp; &nbsp; Browse</p></Link>
      <Link to="/"><p>📈  &nbsp; &nbsp; &nbsp; Trending</p></Link>
      <Link to="/"><p>👀  &nbsp; &nbsp; &nbsp; Upcoming</p></Link>
      <Link to="/"><p>🔎  &nbsp; &nbsp; &nbsp; Search</p></Link>
      <Link to="/orders/new"><p>＋  &nbsp; &nbsp; &nbsp; My List</p></Link>

      </div>
      
      
      <div className='navSettings'>
      <Link to="/" onClick=""><p>Settings</p></Link>
      <Link to="" onClick={handleLogOut}><p >Exit Netflix</p></Link>

      </div>

    </nav>
  );
}