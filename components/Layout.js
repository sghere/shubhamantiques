import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const Theme = useSelector((state) => state.toggler.Theme);

  return (
    <>
      <div className={'appcss ' + (Theme ? 'light-theme' : 'dark-theme')}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
