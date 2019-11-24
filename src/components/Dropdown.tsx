import React, { Fragment, useRef, useContext, memo } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Input from './Input';
import { AppContext } from '../appContext';

const List = styled.ul`
  margin: 0;
  text-align: center;
  list-style-type: circle;
`
interface Props {
  listBlockHeight: number;
}

const Dropdown: React.FC<Props> = memo(({ listBlockHeight }) => {

  const { state } = useContext(AppContext);

  // const renders = useRef(0);
  // console.log('renders::', renders.current++)

  const { displayMatchesList, matches} = state;

  return (
    <Fragment>
      Type in your search term then select an option from the list:
      <Input />
      <List>
        {
          displayMatchesList && !!matches.length &&
            matches.filter((_, ind) => ind <= listBlockHeight-1)
              .map((match: string, ind: number) =>
                <ListItem key={ind} match={match} />)
        }
      </List>
    </Fragment>
  );
});

export default Dropdown;
