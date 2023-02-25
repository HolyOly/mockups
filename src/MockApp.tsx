import './MockApp.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import { Collections } from './components/collections/collections';
import { Header } from './components/header/header';
import Footer from './components/footer/footer';
import { UndefinedPage } from './components/undefinedPage/undefinedPage';
import { useLang } from './hooks/lang';
import { Login } from './components/log_in/login';

export const LangContext = React.createContext<IInitLangContext>({
  changeLang: () => {},
});

function MockApp() {
  const { setLang, newLang } = useLang();
  const changeLang = (lang: string): void => {
    newLang.curLang = lang;
    setLang(newLang.curLang);
  };

  return (
    <LangContext.Provider value={{ changeLang }}>
      <div className="content-body">
        <Header></Header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/Collections" element={<Collections />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            {/* <Route path="/Auth" element={<Auth />}></Route> */}
            <Route path="*" element={<UndefinedPage />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </LangContext.Provider>
  );
}

export default MockApp;
