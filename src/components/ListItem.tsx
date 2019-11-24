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
  const { state, setState } = useContext(AppContext);

  const handleClick = () => {
    setState({
      ...state,
      inputValue: match,
    })
  }
  return <Li onClick={handleClick}>{ match }</Li>
}

export default ListItem;