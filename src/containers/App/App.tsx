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
  // the application state. it is passed to Dropdown as passedValue prop 
  const [selectedOption, setSelectedOption] = useState('');
  // value to be passed to the Dropdown component
  // if no option were selected the initial value is passed
  const initialValue = data && data[0];
  const valueToPass = selectedOption || initialValue;
  // handler to process the click on a dropdown's displayed option
  // it's a callback which is passed down to the child as a prop
  const clickHandler = (clickedOption: string) => {
    setSelectedOption(clickedOption)
  }
  const appState = {
    valueToPass,
    clickHandler
  }

  return (
    <ErrorBoundary>
      <Container>
        <Header>
          <p>Welcome to the awsome App! :)</p>
        </Header>
        <Section>
          <AppContext.Provider value={appState} >
            <Dropdown
              passedValue={valueToPass}
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
