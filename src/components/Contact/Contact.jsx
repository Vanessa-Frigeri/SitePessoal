import React, {useState} from 'react';
import Header from '../Header';
import Container from '../Container';
import SideProfile from '../SideProfile';
import BoxRight from '../BoxRight';
import Title from '../Title';
import {
  ContactForm,
  ContactLabel,
  ContactInputEmail,
  ContactTxtAreaMessage,
  ContactButton,
  ContactGroup
} from './ContactElements';

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const [isActiveTxtArea, setIsActiveTxtArea] = useState(false);
  const [valueTxtArea, setValueTxtArea] = useState('');

  const handleTextChange = (text) => {
    setValue(text);
  
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const handleTextChangeTxtArea = (text) => {
    setValueTxtArea(text);
  
    if (text !== '') {
      setIsActiveTxtArea(true);
    } else {
      setIsActiveTxtArea(false);
    }
  }

  return (
    <>
      <Header/>
      <Container>
        <SideProfile/>
        <BoxRight>
          <Title>Contato</Title>
          <ContactForm>
            <ContactGroup>            
              <ContactInputEmail
                value={value}
                id="contactGroupEmail" 
                type="email" 
                placeholder=""
                onChange={(e) => handleTextChange(e.target.value)}
              />
              <ContactLabel 
                htmlFor="contactGroupEmail" 
                className={ isActive ? "Active" : ""} >
                  E-mail
              </ContactLabel>
            </ContactGroup>
            <ContactGroup>           
              <ContactTxtAreaMessage 
                value={valueTxtArea}
                rows="10" 
                id="contactGroupMessage" 
                placeholder=""
                onChange={(e) => handleTextChangeTxtArea(e.target.value)}>
              </ContactTxtAreaMessage>
              <ContactLabel
                htmlFor="contactGroupMessage"
                className={ isActiveTxtArea ? "ActiveTxtArea" : ""}>
                  Messagem
              </ContactLabel>
            </ContactGroup>
            <ContactButton type="button">Enviar</ContactButton>
          </ContactForm>          
        </BoxRight>
      </Container>
    </>    
  );
};



export default Contact;