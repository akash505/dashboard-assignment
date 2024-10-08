import React from "react";

const RecentActivity = () => {
  return (
    <div
      className=" rounded-lg p-6 shadow-lg text-white"
      style={{ background: "#161E54" }}
    >
      <h2 className="text-lg font-semibold mb-4">Recently Activity</h2>
      <p className="text-sm">10.40 AM, Fri 10 Sept 2021</p>
      <h3 className="text-xl font-bold mt-2">You Posted a New Job</h3>
      <p className="mt-2">
        Kindly check the requirements and terms of work and make sure everything
        is right.
      </p>
      <div className="flex justify-between items-center mt-4">
        <span>Today you makes 12 Activity</span>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;
