import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  display: flex;
  
  align-items: center;
  margin-top: 1rem;
  border-radius: .1rem;  
  width: 100%;

  @media screen and (max-width:479px) and (max-width:678px) {
    flex-direction: column;   
  }

  @media screen and (min-width:679px){  
    flex-direction: row;
  }

`;

export const ProfileName = styled.h2`
  display: flex;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  color: var(--indigo-700);

  @media screen and (max-width:480px){    
      font-size: 1.8rem;
      justify-self: center;
  }
`;

export const ProfileProfession = styled(Link)`
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  width: 100%;
  font-size: 1.1rem;
  background-color: var(--indigo-700);
  color: var(--indigo-100);
  height: 2rem;
  letter-spacing: .2rem;  
`;

export const ProfileTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center; 
  width: 100%;
  height: 20rem;

     
  @media screen and (max-width:479px){
    font-size: .5rem;
  }

  @media screen and (min-width:679px){          
    flex-direction: row;
  }

  @media screen and (min-width:679px) and (max-width:768px){          
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 1rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 1rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 1rem;
  }

  @media screen and (min-width: 1201px){
    width: 70%;
    height: 13rem;
    align-self: flex-start;
    margin-left: 1rem;
  }

`;

export const ProfileTableLines = styled.tr`
  display: flex;
  width: 35rem;
  height: 3rem;   
  margin-bottom: 1rem;
  width: 100%;
    
  @media screen and (max-width:479px){
    flex-direction: column;
    text-align: center;
    margin-bottom: .5rem;
  }

  @media screen and (min-width:480px) and (max-width:678px){  
    flex-direction: column;
    text-align: center;
  }

  @media screen and (min-width:679px) and (max-width:768px){          
    flex-direction: row;
    margin-bottom: .1rem;
    height: 2rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    flex-direction: row;
    margin-bottom: .1rem;
    height: 2rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    flex-direction: row;
    margin-bottom: .5rem;
    height: 2.5rem;
  }

  @media screen and (min-width: 1201px){
    height: 2rem;
    margin-bottom: .5rem;
  }
`;

export const ProfileTableTitle = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--indigo-400);
  text-align: center;
  width: 100%;
  
  @media screen and (max-width:479px){
    font-size: .8rem;
  }

  @media screen and (min-width:679px) and (max-width:768px){      
    width: 6rem;    
    font-size: .8rem;       
    justify-content: flex-start;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    width: 6.5rem;        
    justify-content: flex-start;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    width: 8.5rem;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1201px){
    width: 7rem;
    justify-content: flex-start;
  }
`;

export const ProfileTableValue = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  color:var(--indigo-700);
  width: 100%;

  @media screen and (max-width:479px){
    font-size: 1rem;
  }

  @media screen and (min-width:679px) and (max-width:768px){          
    font-size: 1rem; 
    justify-content: flex-start;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    justify-content: flex-start;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    justify-content: flex-start;
  }

  @media screen and (min-width: 1201px){
    justify-content: flex-start;
    width: 25rem;
  }
`;