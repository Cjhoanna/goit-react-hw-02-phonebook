import ContactElementList from 'components/ContactElementList/ContactElementList'
import React from 'react'

const ContactList = ({dataContact, deleteHandle}) => {
  return (
    <ul>
    {dataContact.map(contact => (
      <ContactElementList key={contact.id} data={contact} deleteHandle={deleteHandle}/>
    ))}
  </ul>
  )
}

export default ContactList