import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../appContext';

const Li = styled.li`
  text-align: center;
  cursor: pointer;
  &:hover {
    color: red;
  }
`
interface Props {
  match: string;
  key: number;
}

const ListItem: React.FC<Props> = ({ match }) => {
  const { clickHandler } = useContext(AppContext);
  return <Li onClick={() => clickHandler(match)}>{ match }</Li>
}

export default ListItem;