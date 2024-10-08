import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center border rounded-md p-2 w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none"
        />
        <button>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.3 9.3a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative">
          <img
            className="brightness-90"
            src="../images/ic-notifications.png"
            alt="notification"
          />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        {/* Messages Icon */}
        <button>
          <img
            className="brightness-100"
            src="../images/bi_chat-left-dots-fill.png"
            alt="messageicon"
          />
        </button>

        {/* Profile Image */}
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src="../images/profileimg.png"
            alt="Profile"
          />
          <span className="text-gray-700">Admirra John</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
