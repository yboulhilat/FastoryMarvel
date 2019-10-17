import React from 'react';
import {
  Navbar,
  NavbarBrand,
  } from 'reactstrap';
import Logo from '../assets/fastory_logo.svg'
const Header = () => {
  
  return (
      <Navbar className='header'>
        <NavbarBrand href="/">
          <img src={Logo} alt={'logo'} className='App-logo'/>
        </NavbarBrand>
      </Navbar>
  );
}

export default Header;