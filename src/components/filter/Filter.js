import React from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';

const FilterStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 20px;
  .label {
    margin-bottom: 10px;
  }
`;

const Filter = ({ value, onChange }) => {
  const filterId = v4();
  return (
    <FilterStyled>
      <label className="label" htmlFor={filterId}>
        Find contacts by name
      </label>
      <input type="text" value={value} onChange={onChange} id={filterId} />
    </FilterStyled>
  );
};

export default Filter;
