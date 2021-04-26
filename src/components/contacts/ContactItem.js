import React from 'react';
import './ContactItem.scss';

const ContactItem = ({ info, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      <span>{info.name}: </span>
      <span>{info.number}</span>
      <button onClick={() => onDeleteContact(info.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
