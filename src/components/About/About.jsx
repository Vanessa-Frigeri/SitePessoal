import React from 'react';
import Header from '../Header';
import SideProfile from '../SideProfile/SideProfile';
import Container from '../Container';
import TimelineAbout from '../TimelineAbout';
import BoxRight from '../BoxRight';
import Title from '../Title';

const About = () => {
  return (
    <>
      <Header/>
      <Container>
        <SideProfile/>
        <BoxRight>
          <Title>Formação Técnica e Profissional</Title>
          <TimelineAbout/>
        </BoxRight>
      </Container>
    </>       
  );
};

export default About;