import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav >
      <Link to="/orders"><p>Order History</p></Link>
      
      <Link to="/orders/new"><p>New Order</p></Link>
      
      <p><span>Welcome, {user.name}</span></p>
      
      <Link to="" onClick={handleLogOut}><p>Log Out</p></Link>
    </nav>
  );
}