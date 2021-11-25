import styled from "styled-components";

export const CardBox = styled.div`
  width: 25rem;
  border-bottom: 1rem;
  box-shadow: 0 0 .5rem #0004;
  border-radius: 4px;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: var(--indigo-900);
  width: 100%;
  height: 4rem;
  border-radius: 4px 4px 0 0;
`;

export const CardLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  padding: .2rem;
  border-radius: 50%;
  background-color: var(--indigo-50);
`;

export const CardHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--indigo-900);
  width: 100%;
  height: 2rem;
  border-radius: 0 0 4px 4px;
`;

export const CardMain = styled.main`
  color: var(--indigo-800);
  background-color: var(--indigo-50);  
  min-height: 6rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: var(--indigo-50);
`;

export const Subtitle = styled.h5`
  color: var(--indigo-200);
  font-weight: normal;
  font-style: italic;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: .8rem;
  font-weight: normal;
`;

export const FooterText = styled.span`
  font-size: 1rem;
  color: var(--indigo-50);
`;