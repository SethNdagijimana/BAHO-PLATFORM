import React, {useState} from 'react';
import "./Navbar.css";
import {Button} from "../buttons/Button";
import {Link} from "react-router-dom";


function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick =() => setClick(!click)

    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton )
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to ='/' className='navbar-logo'>
                BAHO 
            </Link>
            
            < div className='menu-icon' onClick={handleClick}>
         {/* space for nave menu icons */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Home' className='nav-links' onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links' onClick={closeMenu}>
                        About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact' className='nav-links' onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/Sign-up' className='nav-links' onClick={closeMenu}>
                        Log In
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyled="btn--outline">Sign Up</Button>}
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
