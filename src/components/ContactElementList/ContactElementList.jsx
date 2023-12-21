import React from 'react'

const ContactElementList = ({data, deleteHandle}) => {
  
  return (
    <li> {`${data.name}: ${data.number}`}
    <button onClick={() => deleteHandle(data.id)}>Delete</button>
    </li>
  )
}

export default ContactElementList