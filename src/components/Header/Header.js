
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
const {user,logOut} = useContext(AuthContext)

    return (
       <nav className='Header'>
        <img src={logo} alt="" />
        <div className='btn'>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>

           { user?.uid ? <button className='btn-logout' onClick={logOut}>Log Out</button>
           :
            <>
             <Link to="/login">Log In</Link>
             <Link to="/signup">Sign Up</Link></>
           }
            
        </div>
       </nav>
    );
};

export default Header;