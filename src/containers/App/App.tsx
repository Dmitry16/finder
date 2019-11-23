import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';
import { flex, font, height } from '../../common/styles';
import { data } from '../../data';

const Header = styled.header`
  background-color: #282c34;
  ${height}
  ${font}
  ${flex}
  color: white;
`
const Section = styled.section`
  background-color: white;
  ${height}
  ${font}
  ${flex}
`
const Footer = styled.footer`
  background-color: #282c34;
  ${height}
  ${font}
  ${flex}
`
const Container = styled.div`
  text-align: center;
`

const App: React.FC = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const initialValue = data && data[0];
  const passedValue = selectedOption || initialValue;

  const clickHandler = (clickedOption: string) => {
    setSelectedOption(clickedOption)
  }

  return (
    <ErrorBoundary>
      <Container>
        <Header>
          <p>
            Welcome to the awsome Finder App!
          </p>
        </Header>
        <Section>
          <Dropdown
            listBlockHeight={5}
            clickHandler={clickHandler}
            passedValue={passedValue}
          />
        </Section>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
