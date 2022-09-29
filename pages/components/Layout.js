import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [Theme, setTheme] = useState(false);

  return (
    <>
      <div className={'appcss ' + (Theme ? 'light-theme' : 'dark-theme')}>
        <Navbar Theme={Theme} setTheme={setTheme} />
        <main className="flex justify-center container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
