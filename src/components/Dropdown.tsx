import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { findMatch } from '../utils';
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
  clickHandler: (value: string) => void;
}
interface State {
  showMatchesList?: boolean,
  matches?: string[]
}

const Dropdown: React.FC<Props> = ({ initialValue, clickHandler }) => {

  const [inputValue, setInputValue] = useState(initialValue);

  const [state, setState] = useState({
    showMatchesList: false,
    matches: ['']
  });

  const { data } = api;

  console.log('state::', state)

  useEffect(() => {
    setState({
      ...state,
      showMatchesList: true,
      matches: findMatch(inputValue, data)
    })
  }, [inputValue, findMatch]);

  const changeHandler = (event: any) => {
    setInputValue(event.target.value);
  }

  const { showMatchesList, matches} = state;

  return (
    <Fragment>
      Start typing your search in:
      <Input type='text' name='dropdown' value={inputValue} onChange={changeHandler} />
      {
        showMatchesList && !!matches.length &&
          matches.map((match: string, ind: number) =>
            <ListItem clickHandler={clickHandler} key={ind} match={match} />)
      }
    </Fragment>
  );
}

export default Dropdown;
