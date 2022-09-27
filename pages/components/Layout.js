import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, Theme, setTheme }) => {
  return (
    <>
      <Navbar Theme={Theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
