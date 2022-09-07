import React from 'react';
import { Contactelement, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
// import { Statselement, StatsElementSpan } from './ContactList.styled';

const ContactList = ({ contacts, handlerDelet }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Contactelement
            key={contact.id}
            contact={contact}
            handlerDelet={handlerDelet}
          >
            {contact.name}:{contact.number}
            <Button onClick={() => handlerDelet(contact.id)}>Delet</Button>
          </Contactelement>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handlerDelet: PropTypes.func.isRequired,
};

export default ContactList;
