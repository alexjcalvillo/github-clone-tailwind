import React, { useEffect } from 'react';

const NavBtn = ({ SVG, Title, TotalRepos }) => {
  return (
    <button className="pl-3 pr-3 w-auto border-b-2 border-gray-400 border-opacity-0 group focus:outline-none hover:border-opacity-100 focus:border-opacity-100 focus:border-orange-600 focus:font-semibold">
      <div className="py-3 text-sm antialiased flex">
        <img
          className="h-4 w-4 mt-px mx-2 fill-current"
          src={SVG}
          alt="svg for button"
        />
        <span className="">{Title}</span>
        {TotalRepos ? (
          <span className="px-2 py-px mx-1 bg-gray-300 text-gray-900 text-xs rounded-full">
            {TotalRepos}
          </span>
        ) : (
          ''
        )}
      </div>
    </button>
  );
};

export default NavBtn;
