import React from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import SideMenu from './components/SideMenu/SideMenu';
import TopNav from './components/TopNav/TopNav';
import { pencil, smiley } from './svgs';

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
          <div className="p-5 flex items-center justify-between border border-gray-400 rounded">
            <div className="flex items-center gap-1 text-xs font-mono tracking-wide">
              <img className="inline" src={smiley} alt="smiley" />
              <span className="text-gray-800">
                alexjcalvillo<span className="text-gray-600 mx-px">/</span>
                <span className="font-medium">README</span>
                <span className="text-gray-600">.md</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <button className="py-1 px-3 bg-gray-100 border border-gray-400 rounded-lg text-xs font-semibold text-blue-700 shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600">
                Send feedback
              </button>
              <svg
                className="fill-current w-4 h-4 cursor-pointer hover:text-blue-600"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
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
