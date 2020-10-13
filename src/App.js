import React from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import RepoPins from './components/interactables/RepoPins/RepoPins';
import MainBanner from './components/MainBanner/MainBanner';
import SideMenu from './components/SideMenu/SideMenu';
import TopNav from './components/TopNav/TopNav';
import { bookmark } from './svgs/index';

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
        <div className="mt-8 ml-4 mr-12 w-3/4">
          <MainBanner />
          <div className="mt-6">
            <div className="flex justify-between">
              <h2>Pinned</h2>
              <span>Customize your pins</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <RepoPins
                RepoTitle="ConnectHER_Application"
                Description="The InnovateHER KC community is transitioning from using a Facebook
          group to their own platform for a community space."
                CodeType="CSS"
                className="w-1/2"
              />
              <RepoPins RepoTitle="personal_development" className="w-1/2" />
              <RepoPins
                RepoTitle="findmytime-solo-project"
                CodeType="JavaScript"
                className="w-1/2"
              />
              <RepoPins
                RepoTitle="weather-app"
                CodeType="CSS"
                className="w-1/2"
              />
              <RepoPins
                RepoTitle="weekend-chal-6-movie-sagas"
                CodeType="JavaScript"
                className="w-1/2"
              />
              <RepoPins
                RepoTitle="weekend-to-do-list"
                CodeType="JavaScript"
                className="w-1/2"
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div></div>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
