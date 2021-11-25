import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px ;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  /* margin-top: -80px; */
  background: var(--indigo-900);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px){
    transition: .8s all ease;
  }
`;

export const NavLogo = styled(LinkR)`
  color: var(--indigo-50);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: var(--indigo-50);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid var(--cyan-500);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: var(--indigo-50);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

