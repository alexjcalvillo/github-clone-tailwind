import React, { useState } from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import TopNav from './components/TopNav/TopNav';
import { smiley } from './svgs/index';

function App() {
  const [status, setStatus] = useState(false);
  const TotalRepos = 60;
  return (
    <div>
      <header>
        <TopNav />
        <BottomNav TotalRepos={TotalRepos} />
      </header>
      <main className="container mx-24">
        <div className="w-1/4">
          <div className="p-4 -mt-12 relative">
            <img
              className="object-cover rounded-full cursor-pointer"
              src="profile.png"
              alt="profile of user"
            />
            <div
              onMouseEnter={() => setStatus(false)}
              onMouseLeave={() => setStatus(true)}
            >
              {status ? (
                <div className="absolute mr-4 mb-12 p-3 w-10 h-10 box-border bottom-0 right-0 bg-white border rounded-full shadow-sm">
                  <span className="">
                    <img className="" src={smiley} alt="smiley icon" />
                  </span>
                </div>
              ) : (
                <div className="absolute flex items-center z-30 -mr-10 mb-12 p-3 pr-0 w-24 h-10 box-border bottom-0 right-0 bg-white border rounded-full shadow-sm transition-all transition-100">
                  <div className="hover:text-blue-600">
                    <svg
                      className="w-4 h-4 mb-1 inline mr-px fill-current cursor-pointer"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
                      />
                      <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                    <span className="text-xs inline ml-px cursor-pointer hover:text-blue-600">
                      Set Status
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-4">
            <h2 className="text-2xl font-semibold leading-tight">
              Alex Calvillo
            </h2>
            <h3 className="text-xl font-light text-gray-700 leading-tight mb-4">
              alexjcalvillo
            </h3>
            <p className="tracking-wide subpixel-antialiased mb-5">
              Software engineer who loves front-end development and all things
              creative. I code because I love to write, to tell stories, and to
              create things.
            </p>
            <button className="py-1 box-border border border-gray-400 bg-gray-100 font-medium text-sm rounded-lg shadow-sm w-full hover:bg-gray-200">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="z-10 overflow"></div>
      </main>
      <footer>
        <div></div>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
