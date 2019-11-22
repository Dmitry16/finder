import React from 'react';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';
import { flex, font, height } from '../../common/styles';

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

const dropdownInitialValue = 'red';

const App: React.FC = () => {

  const dropdownEventHandler = () => {
    console.log('dropdownEventHandler');
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
          <Dropdown value={dropdownInitialValue} handler={dropdownEventHandler} />
        </Section>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
