import styled, { createGlobalStyle } from 'styled-components';
import background from '../assets/gym-background.jpg';

const mediaQuery = '@media (min-width: 570px)';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: #404040;
    margin: 0;
  }
`;

// Styled components with media queries and additional styles
export const Container = styled.div`
  ${mediaQuery} {
    display: flex;
  }
`;

export const Intro = styled.div`
  background: #9480e4 url(${background});
  background-size: cover;
  justify-content: space-between;
  text-align: center;
  min-height: 250px;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;

  ${mediaQuery} {
    width: 50%;
    min-height: 100vh;
  }
`;

export const MainContent = styled.div`
  align-items: center;
  padding-top: 2.5em;
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;

  ${mediaQuery} {
    width: 50%;
    justify-content: center;
    padding-top: 0;
  }
`;

/* =================
  Typography 
 ================= */

export const Heading1 = styled.h1`
  color: #d9d9d9;
  font-weight: 900;
  font-size: 2.5rem;
  text-shadow: 3px 3px #353535;

  ${mediaQuery} {
    font-size: 5vw;
  }
`;

export const Heading2 = styled.h2`
  font-size: 2rem;
  margin: 0.167em 0;

  ${mediaQuery} {
    font-size: 2.625rem;
  }
`;

export const BetaText = styled.span`
  font-weight: 900;
  margin-bottom: 1em;
  color: #d9d9d9;
  text-transform: uppercase;

  ${mediaQuery} {
    font-size: 1.25rem;
  }
`;

export const TopText = styled.p`
  color: #d9d9d9;
  order: -1;
  font-size: 0.875rem;
  font-weight: 900;
  padding-top: 0.25em;
  border-top: 5px solid;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const ImgMain = styled.img`
  width: 18%;
  border-radius: 50%;
`;

export const Subheading = styled.span`
  color: #575757;
  font-weight: 900;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  text-align: center;
`;

export const FinePrint = styled.p`
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: #858585;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.35;
  max-width: 450px;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 450px;
`;

export const Input = styled.input`
  margin-bottom: 0.75em;
  padding: 0.5em;
  border: 2px solid #d1d5db;
  font-family: inherit;
  width: 100%;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #353535;
    background-color: #e6e8ec;
  }
`;

export const ButtonPrimary = styled.button`
  border: none;
  font-weight: 900;
  padding: 1em 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #353535;
  margin-top: 1em;
  font-family: inherit;
  width: 100%;
  border-radius: 5px;

  &:hover,
  &:focus {
    background: #7b7982;
  }
`;