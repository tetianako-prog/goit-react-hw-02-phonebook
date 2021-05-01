import React from 'react';
import styled from 'styled-components';

const ContactItemStyled = styled.li`
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const DeleteButtonStyled = styled.button`
  display: inline-block;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  padding-right: 8px;
  padding-left: 8px;
  font-size: 14px;
  background-color: #dcdcdc;
  border: 1px solid #696969;
  border-radius: 5px;
  &:hover {
    background-color: #808080;
    color: #fff;
  }
`;

const ContactItem = ({ info: { name, number, id }, onDeleteContact }) => {
  return (
    <ContactItemStyled>
      {name}: {number}
      <DeleteButtonStyled onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButtonStyled>
    </ContactItemStyled>
  );
};

export default ContactItem;
