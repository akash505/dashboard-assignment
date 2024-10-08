import React from "react";

function UpcomingSchedule() {
  const priorityTasks = [
    {
      title: "Review candidate applications",
      time: "Today - 11:30 AM",
    },
  ];

  const otherTasks = [
    {
      title: "Interview with candidates",
      time: "Today - 10:30 AM",
    },
    {
      title: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Upcoming Schedule
        </h2>
        <button className="text-sm text-gray-500 border border-gray-300 px-3 py-1 rounded-md">
          Today, 13 Sep 2021
        </button>
      </div>

      {/* Priority Tasks */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-500">Priority</h3>
        {priorityTasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-2"
          >
            <div>
              <p className="text-sm font-medium text-gray-700">{task.title}</p>
              <p className="text-xs text-gray-500">{task.time}</p>
            </div>
            <div className="flex  space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <img
                  src="../images/carbon_overflow-menu-horizontal.png"
                  alt="Overflow Menu"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Other Tasks */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500">Other</h3>
        {otherTasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-2"
          >
            <div>
              <p className="text-sm font-medium text-gray-700">{task.title}</p>
              <p className="text-xs text-gray-500">{task.time}</p>
            </div>
            <div className="flex  space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <img
                  src="../images/carbon_overflow-menu-horizontal.png"
                  alt="Overflow Menu"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=" text-center mt-6">
        <button className="text-red-500 font-semibold hover:underline">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
