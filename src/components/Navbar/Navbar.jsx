import React from 'react';
import { FaBars, FaAngleLeft ,FaAngleRight } from 'react-icons/fa';
import {
  NavbarContainer, 
  Nav, 
  NavLink, 
  NavMenu, 
  MobileIcon, 
  NavLogo, 
  NavItem,
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"><FaAngleLeft/>VF<FaAngleRight/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/about" >
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" >
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/project" >
                Projetos
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
