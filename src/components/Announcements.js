import React from 'react';

function Announcements() {
  const announcements = [
    { id: 1, text: "Outing schedule for every department", time: "5 Minutes ago" },
    { id: 2, text: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    { id: 3, text: "IT Department needs two more talents", time: "Yesterday, 09:15 AM" }
  ];

  const AnnouncementCard = ({ text, time }) => (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
      <div>
        <h3 className="text-sm font-semibold">{text}</h3>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <div className="flex space-x-2">
        <button className="text-gray-400 hover:text-gray-600">
          <img src="../images/bi_pin-angle-fill.png" alt="Pin Icon" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <img src="../images/carbon_overflow-menu-horizontal.png" alt="Overflow Menu" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-5 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Announcement</h2>
          <span className="text-gray-400">Today, 13 Sep 2021</span>
        </div>
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} text={announcement.text} time={announcement.time} />
        ))}
        <div className="text-center mt-4">
          <a href="/home" className="text-red-500 font-semibold hover:underline">See All Announcements</a>
        </div>      
    </div>
  );
}

export default Announcements;
