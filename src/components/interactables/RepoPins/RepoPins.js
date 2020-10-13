import React from 'react';

const RepoPins = ({ RepoTitle, Description, CodeType }) => {
  let codeColorName = null;
  if (CodeType === 'CSS') {
    codeColorName = 'text-purple-900';
  } else if (CodeType === 'JavaScript') {
    codeColorName = 'text-yellow-400';
  }
  return (
    <div className="px-4 pt-3 pb-4 border border-gray-400 rounded-md text-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="w-3 h-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M15,64h-4c-4.4,0-8-3.6-8-8V8h4v48c0,2.2,1.8,4,4,4h4V64z" />

            <path
              d="M58,12c-2.2,0-4-1.8-4-4s1.8-4,4-4V0H11C6.6,0,3,3.6,3,8s3.6,8,8,8h2v48h47V12H58z M11,12c-2.2,0-4-1.8-4-4s1.8-4,4-4h40.1
	C50.4,5.2,50,6.5,50,8s0.4,2.8,1.1,4H13H11z M35,16h8v14.3l-4-2.7l-4,2.7V16z M56,60H17V16h14v21.7l8-5.3l8,5.3V16h9V60z"
            />
          </svg>
          <span className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline">
            {RepoTitle}
          </span>
        </div>
        <svg
          className="w-5 h-5 fill-current mt-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <div className="text-xs mt-1">
        <p>{Description}</p>
      </div>
      <div className={`pt-4 flex gap-1 items-center ${codeColorName}`}>
        {CodeType ? (
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        ) : (
          ''
        )}
        <span className="text-xs text-gray-600">{CodeType}</span>
      </div>
    </div>
  );
};

export default RepoPins;
