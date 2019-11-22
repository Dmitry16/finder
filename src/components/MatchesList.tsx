import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  text-align: center;
  list-style-type: circle;
`
const ListItem = styled.li`
  text-align: center;
  cursor: pointer;
  &:hover {
    color: red;
  }
`

interface Props {
  match: string,
  key: number
}

const MatchesList: React.FC<Props> = (props: Props) => {

  return (
    <List>
      <ListItem >{ props.match }</ListItem>
    </List>
  )
}

export default MatchesList;