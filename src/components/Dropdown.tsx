import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../api';
// import { flex } from '../common/styles';

const Input = styled.input`
  margin: 3em;
  background: khaki;
  color: blue;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

interface Props {
  initialValue: string;
  findMatch: (inputValue: string, data: string[]) => string[];
}

const Dropdown: React.FC<Props> = ({ initialValue, findMatch }) => {

  const [inputValue, setInputValue] = useState(initialValue);

  const [state, setState] = useState({});

  const { data } = api;

  console.log('state::', state)

  

  useEffect(() => {
    const matches = findMatch(inputValue, data);
    setState({
      ...state,
      matches
    })
  }, [inputValue, findMatch]);

  const changeHandler = (event: any) => {
    setInputValue(event.target.value);
  }

  return (
    <Fragment>
      Start typing your search in:
      <Input type='text' name='dropdown' value={inputValue} onChange={changeHandler} />
    </Fragment>
  );
}

export default Dropdown;
