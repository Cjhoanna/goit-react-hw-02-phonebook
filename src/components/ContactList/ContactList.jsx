import React from 'react'

const ContactList = ({dataContact}) => {
  return (
    <ul>
    {dataContact.map(contact => (
      <li key={contact.id}> {`${contact.name}: ${contact.number}`}</li>
    ))}
  </ul>
  )
}

export default ContactList