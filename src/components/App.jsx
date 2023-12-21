import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandle = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const nameExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === userName.toLowerCase()
    );
    if (nameExist) {
      alert(`${userName} is already in contacts`);
    }
    const newContact = {
      name: userName,
      id: nanoid(),
      number: userNumber,
    };

    this.setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
    form.reset();
  };

  filterHandle = event => {
    const filterName = event.target.value;
    this.setState(prevState => ({ ...prevState, filter: filterName }));
  };

  deleteHandle = (id) => {
    this.setState(prevState=>({
      ...prevState,
      contacts: prevState.contacts.filter(contact=>contact.id!==id)
    }))
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm submit={this.submitHandle} />
        <h2>Contacts</h2>
        <Filter change={this.filterHandle} />

        <ContactList dataContact={filterContact} deleteHandle={this.deleteHandle} />

        
      </div>
    );
  }
}

export default App;
