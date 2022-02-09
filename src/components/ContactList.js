import React, { Component, useState } from 'react';

const ContactList = () => {
  return (
    <div>
      {ContactList.map((contact) => {
       <div>{contact.name}</div>
      })}
    </div>
  )
}
  

export default ContactList;
