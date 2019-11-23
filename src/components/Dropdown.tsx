import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { findMatch } from '../utils';
import { data } from '../data';

const Input = styled.input`
  margin: 3em;
  background: khaki;
  color: blue;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const List = styled.ul`
  margin: 0;
  text-align: center;
  list-style-type: circle;
`
interface Props {
  listBlockHeight: number;
  passedValue: string;
  clickHandler: (value: string) => void;
}

const Dropdown: React.FC<Props> = ({ passedValue, clickHandler, listBlockHeight }) => {

  const [state, setState] = useState({
    inputValue: passedValue,
    displayMatchesList: false,
    matches: ['']
  });

  useEffect(() => {
    setState({
      ...state,
      inputValue: passedValue,
    })
  }, [passedValue]);
  
  const changeHandler = (event: any) => {
    const { value } = event.target;
    setState({
      ...state,
      displayMatchesList: true,
      inputValue: value,
      matches: findMatch(value, data)
    });
  }

  const { displayMatchesList, matches} = state;

  return (
    <Fragment>
      Start typing your search in:
      <Input type='text' name='dropdown' value={state.inputValue} onChange={changeHandler} />
      <List>
        {
          displayMatchesList && matches.length &&
            matches.filter((_, ind) => ind <= listBlockHeight-1)
              .map((match: string, ind: number) =>
                <ListItem clickHandler={clickHandler} key={ind} match={match} />)
        }
      </List>
    </Fragment>
  );
}

export default Dropdown;
