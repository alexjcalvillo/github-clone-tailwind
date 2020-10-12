import React, { useEffect } from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import TopNav from './components/TopNav/TopNav';

function App() {
  const TotalRepos = 60;
  return (
    <div>
      <header>
        <TopNav />
        {/* TODO: Start on 2nd Nav zone */}
        <BottomNav TotalRepos={TotalRepos} />
      </header>
      <main>
        <div></div>
        <div></div>
      </main>
      <footer>
        <div></div>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
