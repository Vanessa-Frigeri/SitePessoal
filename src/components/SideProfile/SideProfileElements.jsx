import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideProfileContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  width: 20rem;
  height: 25rem;
  border-radius: .5rem;
  margin-top: 1rem;
  box-shadow: 0 0 .5em #0004;
  background-color: var(--indigo-100);
  
  @media screen and (max-width:540px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    border-radius: .5rem;
    width: 80%;
    height: 20%;
    margin-bottom: 1rem;
  }


  @media screen and (min-width:541px) and (max-width:678px){   
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    border-radius: .5rem;
    width: 80%;
    height: 20rem;
    margin-bottom: 1rem;   
  }

  @media screen and (min-width:679px) and (max-width:768px){ 
    width: 15rem;
    height: 20rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    width: 17rem;
    height: 22rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    width: 19rem;
    height: 26rem;
  }

  @media screen and (min-width: 1201px){
    width: 21rem;
    height: 28rem;
  }
`;

export const SideProfileHeader = styled.div`
  display:flex;
  margin: .5rem;
  flex-direction: column;
`;

export const SideProfileImg = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: .5rem;
  margin-top: .5rem;
  margin-left: .5rem;

  @media screen and (max-width:540px){
    max-width: 8rem;
    max-height: 8rem;
  }

  @media screen and (min-width:541px) and (max-width:678px){
    max-width: 10rem;
    max-height: 10rem;
    margin-left: .5rem;
  }

  @media screen and (min-width:679px) and (max-width:768px){
    max-width: 10rem;
    max-height: 10rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    max-width: 12rem;
    max-height: 12rem;
    border-radius: .5rem 0 0 .5rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    border-radius: .5rem 0 0 .5rem; 
  }

  @media screen and (min-width: 1201px){
    border-radius: .5rem 0 0 .5rem;    
  }
`;


export const SideProfileName = styled.h2`
  display: flex;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  color: var(--indigo-700);

  @media screen and (max-width:540px){    
    font-size: 1.5rem;
    justify-self: center;
    margin: .5rem;
  }

  @media screen and (min-width:541px) and (max-width:678px){
    font-size: 1.8rem;
    justify-self: center;
    margin: .5rem;
  }

  @media screen and (min-width:679px) and (max-width:768px){
    font-size: 1.3rem;
    justify-self: center;
    margin: .5rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    font-size: 1.5rem;
    justify-self: center;
    margin: .5rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    font-size: 1.7rem;
    justify-self: center;
    margin: .5rem;
  }

  @media screen and (min-width: 1201px){
    font-size: 1.9rem;
    justify-self: center;
    margin: .5rem;
  }
`;



export const SideProfileProfession = styled(Link)`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  text-decoration: none;
  width: 100%;
  font-size: 1.1rem;
  background-color: var(--indigo-200);
  color: var(--indigo-700);
  height: 2rem;
  letter-spacing: .2rem;  

  @media screen and (max-width:540px){    
    font-size: 1rem;
    align-self: center;
  }

  @media screen and (min-width:541px) and (max-width:678px){
    font-size: 1.2rem;
    align-self: center;
  }

  @media screen and (min-width:679px) and (max-width:768px){
    font-size: .9rem;
    align-self: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    font-size: 1rem;
    align-self: center;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    font-size: 1.2rem;
    align-self: center;
  }
`;

export const SideProfileFooter = styled.footer`
  display: flex;
  background-color: var(--indigo-700);
  width: 100%;
  height: 3rem;
  border-radius: 0 0 .5rem .5rem;
  
  @media screen and (max-width:540px){
    align-self: flex-end;
    justify-self: flex-start;
    border-radius: 0;
    width: 100%;
    border-radius: 0 0 .5rem .5rem;
  }
  
  @media screen and (min-width:541px) and (max-width:678px){
    align-self: flex-end;
    justify-self: flex-start;
    border-radius: 0;
    width: 100%;
    border-radius: 0 0 .5rem .5rem;
  }

`;
