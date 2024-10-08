import { useState } from "react";

function Sidemenu() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="w-64   items-center max-h-full bg-gray-50 shadow-lg flex flex-col p-4 md:w-32 lg:w-auto">
      <div className="flex items-center justify-between mb-8 ml-12 md:w-28 md:mr-10">
        <div className="brandlogo">
          <img
            src="../images/vasitum-logo.png"
            alt="Vasitum logo"
            className="w-32"
          />
        </div>
      </div>

      <FrameMainMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div className="mt-11">
        <FrameOther activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
}

function FrameMainMenu({ activeMenu, setActiveMenu }) {
  const mainmenu = [
    { title: "Dashboard", icon: "../images/ic_dashboard.png" },
    { title: "Recruitment", icon: "../images/ic_recruitment.png" },
    { title: "Schedule", icon: "../images/ic_calendar.png" },
    { title: "Employee", icon: "../images/ic_employee.png" },
    { title: "Department", icon: "../images/ic_department.png" },
  ];

  return (
    <div className="mt-4">
      <div className="font-bold text-gray-500 text-sm mb-4 md:items-center">
        MAIN MENU
      </div>
      {mainmenu.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          icon={item.icon}
          active={activeMenu === item.title}
          onClick={() => setActiveMenu(item.title)}
        />
      ))}
    </div>
  );
}

function FrameOther({ activeMenu, setActiveMenu }) {
  const othermenu = [
    { title: "Support", icon: "../images/ic_support.png" },
    { title: "Settings", icon: "../images/ic_settings.png" },
  ];

  return (
    <div className="mt-8">
      <div className="font-bold text-gray-500 text-sm mb-4">OTHER</div>
      {othermenu.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          icon={item.icon}
          active={activeMenu === item.title}
          onClick={() => setActiveMenu(item.title)}
        />
      ))}
    </div>
  );
}

function MenuItem({ title, icon, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-3 rounded-lg cursor-pointer ${
        active ? "bg-red-100 text-red-500" : "text-gray-600 hover:bg-gray-200"
      }`}
    >
      <img src={icon} alt={title} className="w-6 h-6 mr-3" />
      <h1 className="text-base lg:inline md:hidden">{title}</h1>
    </div>
  );
}

export default Sidemenu;
