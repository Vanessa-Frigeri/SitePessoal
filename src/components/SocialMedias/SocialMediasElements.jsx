import styled from 'styled-components';

export const SocialMediasList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediasListItem = styled.li`
  width:  3rem;
  height: 3rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--indigo-100);
  cursor: pointer;
  transition: all .5s ease-in-out;
  padding: .2rem;
  border-color: var(--indigo-400);    

  &:hover{
    transform: scale(1.5);
    border: solid 1px var(--indigo-400);
    box-shadow: 0 0 .5rem #0004;    
  }
`;