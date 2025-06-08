import React, { useState } from 'react';
import Cover from './components/Cover.js';
import IndexPage from './components/IndexPage';
import CursePage from './components/CursePage';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [page, setPage] = useState(null);
  if (!unlocked) return <Cover onUnlock={() => setUnlocked(true)} />;
  if (!page) return <IndexPage onSelectPage={setPage} />;
  return <CursePage curse={page} goBack={() => setPage(null)} />;
}

export default App;