import React from 'react';
import Header from '../Header';
import Container from '../Container';
import SideProfile from '../SideProfile';
import BoxRight from '../BoxRight';
import Title from '../Title';
import Profile from '../Profile/Profile';

const Home = () => {
  return (
    <>
      <Header/>
      <Container>
        <SideProfile/>
        <BoxRight>
          <Title>Informações</Title>
          <Profile/>
        </BoxRight>
      </Container>
    </>    
  );
};

export default Home;