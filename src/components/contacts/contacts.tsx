import React from 'react';
import { ContactForm } from '../contactForm/contactForm';
import { ContextApi } from '../experimental/contextApi';

class Contacts extends React.Component {
  render() {
    return (
      <>
        <h3>Contacts</h3>
        <ContactForm></ContactForm>
        <ContextApi></ContextApi>
      </>
    );
  }
}

export default Contacts;
