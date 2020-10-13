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
          <div className="p-5 -mt-12 relative">
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
          <div className="px-5">
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
            <div className="flex items-center justify-items-start gap-1 text-sm text-gray-600 mt-4">
              <svg
                className="fill-current w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                />
              </svg>
              <span className="font-semibold text-black">4</span>
              <span>followers</span>
              &middot;
              <span className="font-semibold text-black">4</span>
              <span>following</span>
              &middot;
              <svg
                className="fill-current w-3 h-3"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
              <span className="font-semibold text-black">3</span>
            </div>
            <div class="flex flex-col font-light text-sm gap-1 text-gray-700 mt-5">
              <div className="flex items-center gap-1">
                <svg
                  className="fill-current w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <span className="text-black">Kansas City, KS</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <svg
                  className="fill-current w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
                <span className="text-black font-normal cursor-pointer hover:underline hover:text-blue-600">
                  alexanderjcalvillo@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm pb-5 border-b border-gray-400">
                <svg
                  className="fill-current w-4 h-4 flex-none"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                </svg>
                <span className="text-black font-normal cursor-pointer overflow-hidden hover:underline hover:text-blue-600">
                  https://www.linkedin.com/alexanderjcalvillo
                </span>
                <span className="text-black font-light">...</span>
              </div>
              <div>
                <h2 className="text-lg font-medium text-black mt-3">
                  Organizations
                </h2>
                <img
                  className="w-8 h-8 rounded-md pt-3"
                  src="https://avatars0.githubusercontent.com/u/9360728?s=60&v=4"
                  alt="@PrimeAcademy"
                />
              </div>
            </div>
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
