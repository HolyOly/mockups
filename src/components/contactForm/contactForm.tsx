import React, { useState } from 'react';

export function ContactForm() {
  const [person, setPerson] = useState({ firstName: '', surName: '', email: '', message: '' });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surName">Surname: </label>
          <input
            type="text"
            name="surName"
            id="surName"
            value={person.surName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surName">email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surName">message</label>
          <textarea
            name="Text"
            id="Text"
            cols={40}
            rows={5}
            value={person.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sent message
        </button>
      </form>
    </div>
  );
}
