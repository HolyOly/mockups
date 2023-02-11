import React from 'react';
import { ContactForm } from '../contactForm/contactForm';
import { NotificationList } from '../experimental/contextApi';

class Contacts extends React.Component {
  render() {
    return (
      <>
        <h3>Contacts</h3>
        <ContactForm></ContactForm>
        <NotificationList></NotificationList>
      </>
    );
  }
}

export default Contacts;
