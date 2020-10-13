import React from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import MainBanner from './components/MainBanner/MainBanner';
import SideMenu from './components/SideMenu/SideMenu';
import TopNav from './components/TopNav/TopNav';

function App() {
  const TotalRepos = 60;
  return (
    <div>
      <header>
        <TopNav />
        <BottomNav TotalRepos={TotalRepos} />
      </header>
      <main className="container mx-24 flex">
        <SideMenu />
        <MainBanner />
      </main>
      <footer>
        <div></div>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
