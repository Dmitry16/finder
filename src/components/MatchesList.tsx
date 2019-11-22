import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  match: string,
  key: number
}

const MatchesList: React.FC<Props> = (props: Props) => {

  return (
    <div>{ props.match }</div>
  )
}

export default MatchesList;