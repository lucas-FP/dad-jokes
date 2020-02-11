import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  background: transparent;
  border: solid 1px #ff9902;
  border-radius: 3px;
  margin: 0 10px;
  padding: 0 10px;
  width: 40%;
`;

export function SearchInput(props) {
  const { value: initValue, onChange, onSearch } = props;

  const [value, setValue] = useState(initValue || '');

  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
          onChange && onChange(evt.target.value);
        }}
      />
      <Button onClick={() => onSearch && onSearch()}>Search</Button>
    </Container>
  );
}
