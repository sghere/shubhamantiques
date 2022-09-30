import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <div className={'appcss ' + (theme ? 'light-theme' : 'dark-theme')}>
        <Navbar />
        <main className="flex justify-center container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
