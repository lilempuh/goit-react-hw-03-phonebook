import { Container, TitleOne, TitleTwo } from './App.styled';
import { Section } from 'components/Section/Section.styled';
import React from 'react';
import Form from 'components/Form/Form';
import shortid from 'shortid';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);
    if (contactsParsed) {
      this.setState({ contacts: contactsParsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('fffff');
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handlerSubmitChange = ({ name, number }) => {
    const { contacts } = this.state;
    const addContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  getDeletContact = ContactListId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== ContactListId
      ),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section>
          <TitleOne>{'Phonebook'}</TitleOne>
          <Form onSubmit={this.handlerSubmitChange} />
        </Section>

        <Section>
          <TitleTwo>{'Contacts'}</TitleTwo>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            handlerDelet={this.getDeletContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
