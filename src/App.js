import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardOverview from "./components/DashboardOverView";
import RecentActivity from "./components/RecentActivity";
import UpcomingSchedule from "./components/UpcomingSchedule";
import EmployeeCard from "./components/EmployeeCard";
import Announcement from "./components/Announcements";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-poppins">
      <Sidebar />

      <div className="flex-1 bg-white">
        <Header />

        <div className="p-8 ">
          <h1 className="text-2xl font-bold mb-8 font-poppins">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-11">
            <div className="grid grid-cols-1 md:grid-row-3 gap-6 w-full">
              <div className="">
                <DashboardOverview />
              </div>

              {/* <UpcomingSchedule /> */}
              {/* Employee and Talent Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-max">
                <EmployeeCard
                  title="Total Employees"
                  number="216"
                  men="120"
                  women="96"
                  imageUrl="/images/Frame 52.svg"
                />
                <EmployeeCard
                  title="Talent Request"
                  number="16"
                  men="6"
                  women="10"
                  imageUrl="/images/Frame 52 (1).svg"
                />
              </div>
              <div>
                {/* className="grid grid-cols-1 md:grid-cols-2 gap-6" */}
                <Announcement />
              </div>
            </div>

            <div className="grid grid-rows-1 gap-6 ">
              <RecentActivity />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
