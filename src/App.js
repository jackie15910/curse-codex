import React, { useEffect, useState } from 'react';
import Cover from './components/Cover.js';
import IndexPage from './components/IndexPage';
import CursePage from './components/CursePage';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (!unlocked) {
      document.body.classList.remove('parchment');
      document.body.classList.add('black');
    } else {
      document.body.classList.remove('black');
      document.body.classList.add('parchment');
    }
  }, [unlocked]);

  if (!unlocked) {
    return <Cover onUnlock={() => setUnlocked(true)} />
  };

  if (!page) {
    return <IndexPage onSelectPage={setPage} />
  };

  return <CursePage curse={page} goBack={() => setPage(null)} />;
}

export default App;