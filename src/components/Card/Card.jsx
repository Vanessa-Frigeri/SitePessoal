import React from 'react';
import logoMetodista from '../../assets/images/logoMetodista.png';
import {
  CardBox,
  CardHeader,
  CardMain,
  CardFooter,
  Title,
  Subtitle,
  Description,
  FooterText,
  CardLogo,
  CardHeaderBox
} from './CardElements';

const Card = (props) => {
  return(
    <CardBox>
      <CardHeader>
        <CardLogo src={logoMetodista} alt="logotipo"/>
        <CardHeaderBox>
          <Title>Universidade Metodista de São Paulo</Title>
          <Subtitle>Analise e desenvolvimento de Sistemas</Subtitle>
        </CardHeaderBox>
      </CardHeader>
      <CardMain>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Dolor, molestias beatae? Aliquam eveniet provident mollitia dolore alias 
          tempora fugit ipsam aperiam placeat expedita dolorem necessitatibus, ab at reprehenderit adipisci debitis.
        </Description>
      </CardMain>
      <CardFooter>
        <FooterText>Concluído</FooterText>
      </CardFooter>
    </CardBox>
  );
}

export default Card;