import { Component } from "react"

class ContactForm extends Component {
    state = {
        name: '',
        number:"",
    };

handleName = (event) => {this.setState({name:event.target.value})}
handleNumber= (event) => {this.setState({number:event.target.value})}
 render (){
    return (
        <form onSubmit={e=> this.props.submit(e)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleName}
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
            onChange={this.handleNumber}
          />
        </label>
        <button>Add contact</button>
      </form>
      )
 }
}

export default ContactForm