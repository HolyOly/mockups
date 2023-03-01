import './MockApp.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import { Collections } from './components/collections/collections';
import { Header } from './components/header/header';
import Footer from './components/footer/footer';
import { UndefinedPage } from './components/undefinedPage/undefinedPage';
import { useLang } from './hooks/useLang';
import { Login } from './components/auth/log_in/login';
import { Registration } from './components/auth/registration/registration';
import { Profile } from './components/account/profile';

export const LangContext = React.createContext<IInitLangContext>({
  changeLang: () => {},
});

export const LayoutContext = React.createContext<IInitLayoutContext>({
  hideMainSection: () => {},
});

function MockApp() {
  const { setLang, newLang } = useLang();
  const [isShowedMain, setMain] = useState(true);

  const changeLang = (lang: string): void => {
    newLang.curLang = lang;
    setLang(newLang.curLang);
  };

  const hideMainSection = (isShow: boolean): void => {
    setMain(isShow);
  };

  return (
    <LangContext.Provider value={{ changeLang }}>
      <LayoutContext.Provider value={{ hideMainSection }}>
        <div className="content-body">
          <Header></Header>
          <main className={`main ${isShowedMain ? '' : 'hide-main'}`}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Contacts" element={<Contacts />}></Route>
              <Route path="/Collections" element={<Collections />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Registration" element={<Registration />}></Route>
              <Route path="/Me" element={<Profile />}></Route>
              <Route path="*" element={<UndefinedPage />}></Route>
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </LayoutContext.Provider>
    </LangContext.Provider>
  );
}

export default MockApp;
