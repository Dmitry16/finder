import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';
import { flex, font, height } from '../../common/styles';
import { api } from '../../api';

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

  const { data } = api;
  const initialValue = selectedOption || data && data[0];

  console.log('initialValue:', initialValue);

  const clickHandler = (value: string) => {
    setSelectedOption(value)
    // console.log('clickHandler!!', value)
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
            initialValue={initialValue}
          />
        </Section>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
