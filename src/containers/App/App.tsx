import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';
import Dropdown from '../../components/Dropdown';
import { flex, font, height } from '../../common/styles';
import { data } from '../../data';
import { AppContext } from '../../appContext';

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
const config = {
  // the number of lines of the Dropdown's list block to be displayed
  listBlockHeight: 5
}

const App: React.FC = () => {
  const initialValue = data && data.length && data[0];
  // the application state which is passed to the Context 
  const [state, setState] = useState({
    data,
    inputValue: initialValue || '',
    selectedOption: '',
    displayMatchesList: false,
    matches: []
  });

  return (
    <ErrorBoundary>
      <Container>
        <Header>
          <p>Welcome to the awsome App! :)</p>
        </Header>
        <Section>
          <AppContext.Provider value={{state, setState}} >
            <Dropdown
              listBlockHeight={config.listBlockHeight}
            />
          </AppContext.Provider>
        </Section>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
