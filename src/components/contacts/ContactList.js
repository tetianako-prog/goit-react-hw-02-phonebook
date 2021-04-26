import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <>
      {contactList.map(item => (
        <ContactItem
          key={item.id}
          info={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </>
  );
};

export default ContactList;
