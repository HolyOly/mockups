import './MockApp.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import { UndefinedPage } from './components/notFound/notFound';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Collections from './components/collections/collections';
import Header from './components/header/header';

function MockApp() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Collections" element={<Collections />}></Route>
          {/* <Route path="/Auth" element={<Auth />}></Route> */}
          <Route path="*" element={<UndefinedPage />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default MockApp;
