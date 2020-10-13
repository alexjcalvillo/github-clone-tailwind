import React from 'react';
import { smiley } from '../../svgs/index';

const MainBanner = () => {
  return (
    <div className="mt-8 ml-4 mr-12 w-3/4">
      <div className="p-5 border border-gray-400 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-mono tracking-wide">
            <img className="inline" src={smiley} alt="smiley" />
            <span className="text-gray-800">
              alexjcalvillo<span className="text-gray-600 mx-px">/</span>
              <span className="font-medium">README</span>
              <span className="text-gray-600">.md</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
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
        <div className="mt-2 flex-col">
          <p className="text-lg font-semibold mb-3">
            Hi there{' '}
            <span aria-label="hand waving emoji" role="img">
              👋
            </span>{' '}
            I'm Alex.
          </p>
          <p className="text-sm">
            I'm a Software Engineer. I'm a writer. I'm a creative. I'm currently
            working on myself, but open to work immediately!
          </p>
          <div className="my-4 mx-3">
            <span>
              &bull;
              <span className="pl-2" role="img" aria-label="eyes emoji">
                👀
              </span>{' '}
              <span className="text-sm">
                See what I'm doing to{' '}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  develop
                </span>{' '}
                (myself)!
              </span>
            </span>
            <br />
            <span>
              &bull;
              <span className="pl-2" role="img" aria-label="tools emoji">
                🛠
              </span>{' '}
              <span className="text-sm">
                Most recently I worked on:{' '}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  ConnectHER
                </span>{' '}
                |{' '}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Code For KC
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
