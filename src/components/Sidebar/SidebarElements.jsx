import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--indigo-900) ;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--indigo-50);
`;

export const SidebarWrapper = styled.div`
  color: var(--indigo-50);
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: ease-in-out.2s ease-in-out;
  color: var(--indigo-50);
  cursor: pointer;

  &:hover{
    color: var(--cyan-500);
    transition: .2s ease-in-out;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,80px);
  text-align: center;

  @media screen and (max-width:480px){
    grid-template-rows: repeat(6,60px);
  }
`;