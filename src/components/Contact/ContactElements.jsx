import styled from 'styled-components';

export const ContactForm = styled.form`
  display:flex;
  flex-direction: column;  
  justify-content: space-around;
  align-items: center;
  background-color: transparent; 
  min-height: 25rem;

  @media screen and (max-width:479px){
    width: 100%; 
  }

  @media screen and (min-width:480px) and (max-width:540px){   
    width: 90%; 
  }

  @media screen and (min-width:541px) and (max-width:678px){  
    width: 90%;
  }

  @media screen and (min-width:679px) and (max-width:768px){  
    width: 25rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    width: 30rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){
    width: 40rem;
  }

  @media screen and (min-width: 1201px){
    width: 40rem;
  }

`;
export const ContactLabel = styled.label`
  color: var(--indigo-400);
  pointer-events: none;
  position: absolute;
  transform: translate(1rem, .1rem) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;

`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  padding-top: 1rem;
  outline: none;
  border: 1px solid var(--indigo-500);
  border-radius: 5px;
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;

  &:focus-within ${ContactLabel} {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .Active {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .ActiveTxtArea{
    transform: translate(1rem, -1rem) scale(0.90);
  }
`;

export const ContactTxtAreaMessage = styled.textarea`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  overflow:auto;
  resize: none;
  margin-left: .5rem;
  margin-right: .5rem;
  flex-direction: column;
`;

export const ContactInputEmail = styled.input`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
  //border: 1px solid red;
`;

export const ContactButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.2rem;
  height: 3rem;
  padding: .5rem;
  background-color: var(--indigo-500);
  border: none;
  border-radius: .5rem;
  color: var(--indigo-100);
  transition: all .3s ease-in-out;

  &:hover{
    color: var(--indigo-500);
    background-color: var(--indigo-100);
    border: .1rem solid var(--indigo-500);
    box-shadow: 0 5px .5rem #0004;
  }
`;

