import { Component } from 'react';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number:"",
  };

  submitHandle = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const newContact = {
      name: userName,
      id: nanoid(),
      number:userNumber, 
    };

    this.setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
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
        <form onSubmit={this.submitHandle}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <div>
          <h3>Find contacts bye name</h3>
          <input type="text"/>
        </div>
        <ul>
          {this.state.contacts.map(contact => (
          <li key={contact.id}> {`${contact.name}: ${contact.number}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
