import React, { Fragment } from 'react';
import styled from 'styled-components';
// import { flex } from '../common/styles';

const Input = styled.input`
  margin: 3em;
  background: khaki;
  color: blue;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

interface Props {
  value: string;
  handler: () => void;
}

const Dropdown: React.FC<Props> = ({ value, handler }) => {

  return (
    <Fragment>
      Start typing your search in:
      <Input type='text' name='dropdown' value={value} onChange={handler} />
    </Fragment>
  );
}

export default Dropdown;
