import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './Container/Container.styled';
import { MainTitles, SecondTitles } from './Titles/Titles';
import { PhoneBookEditor } from './PhoneBookEditor/PhoneBookEditor';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
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
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (values, { resetForm }) => {
    const { name, number } = values;
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(newContact.name + 'is already in contacts');
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      resetForm();
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  doesFiltration = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleCotnacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilterData = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilterData)
    );
  };

  render() {
    const filteredDataContacts = this.getVisibleCotnacts();
    return (
      <Container>
        <MainTitles title={'Phonebook'} />
        <PhoneBookEditor addContact={this.addContact} />
        <SecondTitles title={'Contacts'} />
        <Filter
          title={'Find contacts by name '}
          doesFiltration={this.doesFiltration}
        />
        <ContactsList
          contacts={filteredDataContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
