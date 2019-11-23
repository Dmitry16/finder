import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { findMatch } from '../utils';
import { data } from '../data';

const Input = styled.input`
  margin: 1em;
  padding: 0 0.5em;
  height: 1.5em;
  font-size: 1em;
  background: khaki;
  color: blue;
  border: 2px solid green;
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
  // whenever a new value is passed from the parent
  // (after a dropdown option had been selected) it's been displayed as an input value
  useEffect(() => {
    setState({
      ...state,
      inputValue: passedValue,
    })
  }, [passedValue]);
  // handler to process a change event (typing or deleting) in the input
  const changeHandler = (event: any) => {
    const { value } = event.target;
    setState({
      ...state,
      displayMatchesList: !!value,
      inputValue: value,
      matches: findMatch(value, data)
    });
  }

  const { displayMatchesList, matches} = state;

  return (
    <Fragment>
      Type in your search term then select an option from the list:
      <Input type='text' name='dropdown' value={state.inputValue} onChange={changeHandler} />
      <List>
        {
          displayMatchesList && matches.length &&
            matches.filter((_, ind) => ind <= listBlockHeight-1)
              .map((match: string, ind: number) =>
                <ListItem key={ind} clickHandler={clickHandler} match={match} />)
        }
      </List>
    </Fragment>
  );
}

export default Dropdown;
