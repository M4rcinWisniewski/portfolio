import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../styles/Navbar-mobile.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active)
    document.body.style.backgroundColor = active ? "#181818" : "#e6e6e6";
    document.body.style.color = active ? "#ffffff" : '#181818';
  }

  return (
    <nav>
      <div className='hamburger-chnage'> 
      <p className='hamburger' onClick={handleToggle} style={{color: active ? isOpen ? '#ffffff' : '#181818' : isOpen ? '#181818' : '#ffffff'}}>
        <GiHamburgerMenu  />
      </p>
      </div>
      {isOpen && (
        
        <div className='Nav--open' style={{backgroundColor: active ? '#181818' : '#e6e6e6', opacity: '90%', color: active ? '#ffffff' : '#181818'}}>
                               <Link            
            activeClass="active" 
            to="First" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={1500}>
              <p className='Title2'>PORTFOLIO</p>
            </Link>
        <ul className="menu">
                     <Link            
            activeClass="active" 
            to="bio" 
            spy={true} 
            smooth={true} 
            offset={80} 
            duration={1500}>
              <li>BIOGRAFIA</li>
            </Link>
            <Link            
            activeClass="active" 
            to='LeftC-img'
            spy={true} 
            smooth={true} 
            offset={-500} 
            duration={1500}>
              <li>Projekty Stron WWW</li>
            </Link>

            <Link            
            activeClass="active" 
            to="feedback" 
            spy={true} 
            smooth={true} 
            offset={100} 
            duration={1100}>
              <li>Napisz do mnie</li>
            </Link>
            
          {/* Add more menu items as needed */}
        </ul>
        <div className='change' onClick={handleClick} style={{backgroundColor: active ? '#e6e6e6' : '#181818'}}>
          <div className='handle'  
          style={{color: active ? '#181818' : '#e6e6e6', 
            borderRadius: '20px',
            border: 'none',
            transform: active ? 'translateX(0)' : "translateX(60%)"
            }}>{active ? <BsSun /> : <BsFillMoonStarsFill/>}
            </div>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
// In this updated code, a state variable isOpen is used to track the visibility of the menu. Clicking on the hamburger icon triggers the handleToggle function, which toggles the value of isOpen. Based on the isOpen value, the menu is conditionally rendered using a ternary operator. When isOpen is true, the menu items are displayed (<ul> and <li> elements). You can customize the menu items by adding or modifying the <li> elements inside the conditional rendering section.
