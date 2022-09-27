import React, { useState } from 'react';
import Layout from './components/Layout';

export default function Landing() {
  const [Theme, setTheme] = useState(false);

  return (
    <>
      <div className={'appcss ' + (Theme ? 'light-theme' : 'dark-theme')}>
        <Layout Theme={Theme} setTheme={setTheme}>
          Hellew
          <button onClick={() => setTheme(!Theme)}>Change Theme</button>
        </Layout>
      </div>
    </>
  );
}
