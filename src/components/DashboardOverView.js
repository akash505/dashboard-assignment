export default  function DashboardOverview() {
    return (
      <div className="grid grid-cols-3 gap-4 font-poppins ">
        <div className="p-5 bg-red-100 rounded-lg shadow">
          <h3 className="text-lg font-medium leading-7">Available Position</h3>
          <p className="text-3xl font-semibold">24</p>
          <span className="text-red-500 font-roboto text-base font-normal leading-6">4 Urgently needed</span>
        </div>
        <div className="p-5  bg-blue-100 rounded-lg shadow">
          <h3 className="text-lg font-medium leading-7">Job Open</h3>
          <p className="text-2xl font-bold">10</p>
          <span className="text-blue-500 font-roboto text-base font-normal leading-6">4 Active hiring</span>
        </div>
        <div className="p-5 bg-pink-100 rounded-lg shadow">
          <h3 className="text-lg font-medium leading-7">New Employees</h3>
          <p className="text-2xl font-bold">24</p>
          <span className="text-pink-500 font-roboto text-base font-normal leading-6">4 Department</span>
        </div>
      </div>
    );
  }
  