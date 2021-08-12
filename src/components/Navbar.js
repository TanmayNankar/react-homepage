import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Get Hired
            <i class='fab fa-typo3' />
          </Link> */}

          <Link className="navbar-logo" to='/'>
          <img src="http://gethired.com.pk/images/logo47.png"
          height="50px" alt="JobSearchSystem Logo" onClick={closeMobileMenu} />
         </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
        
          <li className='nav-item'>
           <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              > About
              </Link>
           </li>
           
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              > Contact us
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/Welcome'
                className='nav-links'
                onClick={closeMobileMenu}
              > Welcome
              </Link>
            </li> */}

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >  Sign Up  
              </Link>
            </li>
             
             
             <li>
              <Link
                to='/sign-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >  Sign In  
              </Link>
            </li>

            
              {/* <Link
                to='/log-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log In
                
              </Link> */}

              {/* <Link
               className='nav-links-mobile' 
               to="/welcome"
               onClick={closeMobileMenu} >
                 Welcome
                 </Link> */}

            
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP Emp</Button>}
          <br/>
          <br/>
          {button && <Button buttonStyle='btn--outline'>LOG IN </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;