import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { findMatch } from '../utils';
import { AppContext } from '../appContext';

const InputField = styled.input`
  margin: 1em;
  padding: 0 0.5em;
  height: 1.5em;
  font-size: 1em;
  background: khaki;
  color: blue;
  border: 2px solid green;
  border-radius: 3px;
`

const Input: React.FC = () => {

  const { state, setState } = useContext(AppContext);

  // handler to process a change event (typing or deleting) in the input
  const changeHandler = (event: any) => {
    const { value } = event.target;
    setState({
      ...state,
      displayMatchesList: !!value,
      inputValue: value || state.inputValue,
      matches: findMatch(value, state.data)
    });
  }

  return <InputField type='text' name='dropdown' value={state.inputValue} onChange={changeHandler} />
}

export default Input;
