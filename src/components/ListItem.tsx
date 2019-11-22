import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  text-align: center;
  list-style-type: circle;
`
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
  clickHandler: (match: string) => void;
}

const ListItem: React.FC<Props> = (props: Props) => {

  return (
      <Li onClick={() => props.clickHandler(props.match)}>{ props.match }</Li>
  )
}

export default ListItem;