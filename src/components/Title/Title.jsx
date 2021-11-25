import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
  return (
    <TitleText>{props.children}</TitleText>
  );
}

export default Title;

const TitleText = styled.h1`
  display: flex;
  align-self: center;
  font-size: 1.5rem;
  color: var(--indigo-600);  
`;