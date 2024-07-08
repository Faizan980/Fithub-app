import companyLogo from '../assets/fitness.gif';
import { app } from "../firebase"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth" // authorization with firebase
import {
  Container,
  Intro,
  MainContent,
  Heading1,
  Heading2,
  BetaText,
  TopText,
  ImgMain,
  Subheading,
  FinePrint,
  Paragraph,
  Form,
  Input,
  ButtonPrimary,
  GlobalStyle
} from './StyledComponent'; // imported Styled Components
import { useState } from 'react';

const auth = getAuth(app)

export default function Main() {
  // Setting up state and atuhorization function
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUpUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then(() => alert("Success, Welcome to the Fitness World!"))
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Intro>
          <Heading1>Join<br />FitHub</Heading1>
          <BetaText>Currently in Beta</BetaText>
          <TopText>Powered by FitHub</TopText>
        </Intro>
        <MainContent>
          <ImgMain src={companyLogo} alt="My avatar." />
          <Heading2>FitHub</Heading2>
          <Subheading>Community-Powered Fitness</Subheading>        
          <Paragraph>
            Welcome to FitHub, your ultimate destination for all things fitness! At FitHub, we are dedicated to helping you achieve your fitness goals with our comprehensive resources, expert guidance, and supportive community.
            <br /> <br />Don't you have an account? Sign Up Now
          </Paragraph>
          <Form>
            <Input 
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              required 
              placeholder="Email" 
              aria-label="Email" />
            <Input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              required 
              placeholder="Password" 
              aria-label="Password" />
            <ButtonPrimary onClick={signUpUser}>Sign Up</ButtonPrimary>
          </Form>   
          <FinePrint>We'll never share your information without permission</FinePrint>
        </MainContent>
      </Container>
    </>
  );
}