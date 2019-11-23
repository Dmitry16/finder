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
const List = styled.ul`
  margin: 0;
  text-align: center;
  list-style-type: circle;
`
interface Props {
  listBlockHeight: number;
  initialValue: string;
  clickHandler: (value: string) => void;
}
interface State {
  displayMatchesList?: boolean,
  matches?: string[]
}

const Dropdown: React.FC<Props> = ({ initialValue, clickHandler, listBlockHeight }) => {

  const [inputValue, setInputValue] = useState(initialValue);

  const [state, setState] = useState({
    displayMatchesList: false,
    matches: ['']
  });

  const { data } = api;

  console.log('state::', state)

  useEffect(() => {
    setState({
      ...state,
      displayMatchesList: true,
      matches: findMatch(inputValue, data)
    })
  }, [inputValue, findMatch]);

  const changeHandler = (event: any) => {
    setInputValue(event.target.value);
  }

  const { displayMatchesList, matches} = state;

  return (
    <Fragment>
      Start typing your search in:
      <Input type='text' name='dropdown' value={inputValue} onChange={changeHandler} />
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
