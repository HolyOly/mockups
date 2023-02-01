import React from 'react';
import { ContactForm } from '../contactForm/contactForm';

class Contacts extends React.Component {
  render() {
    return (
      <>
        <h3>Contacts</h3>
        <ContactForm></ContactForm>
      </>
    );
  }
}

export default Contacts;
