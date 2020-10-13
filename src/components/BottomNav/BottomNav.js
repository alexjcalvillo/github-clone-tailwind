import React from 'react';
import NavBtn from '../interactables/NavBtn/NavBtn';
import { book, bookmark, project, box } from '../../svgs/index';

const BottomNav = ({ TotalRepos }) => {
  return (
    <nav>
      <div className="-ml-16 border-b border-gray-400 justify-center flex">
        <div className="mt-5 flex items-center">
          <NavBtn SVG={book} Title="Overview" />
          <NavBtn SVG={bookmark} Title="Repositories" TotalRepos={TotalRepos} />
          <NavBtn SVG={project} Title="Projects" />
          <NavBtn SVG={box} Title="Packages" />
        </div>
      </div>
    </nav>
  );
};
export default BottomNav;
