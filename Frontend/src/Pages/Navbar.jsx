import React from "react";
import { Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

import {
  FiChevronDown,
  FiMenu,
  FiHeart,
  FiUser,
  FiSettings,
  FiLogOut,
  FiLogIn,
  FiCalendar,
} from "react-icons/fi";

const Navbar = ({
  isLoggedIn = false,
  userName = "",
  userImage = "",
  onMenuClick,
}) => {
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Hospitals",
      path: "/hospitals",
    },
    {
      label: "Treatments",
      path: "/treatments",
    },
    {
      label: "Doctors",
      path: "/doctors",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const profileMenu = [
    {
      key: "profile",
      label: "My Profile",
      icon: <FiUser />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <FiSettings />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <FiLogOut />,
      danger: true,
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleProfileMenu = ({ key }) => {
    if (key === "profile") {
      navigate("/profile");
    }

    if (key === "settings") {
      navigate("/settings");
    }

    if (key === "logout") {
      console.log("User logged out");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div className="flex min-h-18 items-center px-4 sm:px-6 lg:min-h-22 lg:px-8 xl:px-10">

   
        <button
          type="button"
          onClick={onMenuClick}
          className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-700 transition hover:bg-slate-50 lg:hidden"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>

    
        <div className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3 lg:w-67.5 xl:w-75">

          <div className="flex h-10 w-10 items-center justify-center text-[#087D80] sm:h-11 sm:w-11">
            <FiHeart className="text-3xl sm:text-[34px]" />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-slate-900 sm:text-xl lg:text-2xl">
              MedTour
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Care, treatment and a smooth medical journey
            </p>
          </div>

        </div>

     
        <nav className="hidden flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7">

          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item.path)}
              className="whitespace-nowrap text-sm font-medium text-slate-800 transition hover:text-[#087D80] 2xl:text-base"
            >
              {item.label}
            </button>
          ))}

        </nav>

      
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">

        
          <button
            type="button"
            onClick={() => navigate("/book-appointment")}
            className="flex items-center gap-2 rounded-xl bg-[#087D80] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06676A] sm:px-4 sm:text-base"
          >
            <FiCalendar className="text-base sm:text-lg" />

            <span className="hidden md:inline">
              Book Appointment
            </span>

            <span className="md:hidden">
              Book
            </span>
          </button>

  
          {!isLoggedIn && (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 rounded-xl border border-[#087D80] px-3 py-2.5 text-sm font-semibold text-[#087D80] transition hover:bg-[#087D80] hover:text-white sm:px-4 sm:text-base"
            >
              <FiLogIn />

              <span className="hidden sm:inline">
                Login
              </span>
            </button>
          )}

       
          {isLoggedIn && (
            <Dropdown
              menu={{
                items: profileMenu,
                onClick: handleProfileMenu,
              }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition hover:bg-slate-50 sm:gap-3 sm:px-2"
              >
                <Avatar
                  size={42}
                  src={userImage || undefined}
                  icon={<FiUser />}
                  className="shrink-0"
                />

                <span className="hidden max-w-35 truncate font-semibold text-slate-900 sm:block">
                  {userName}
                </span>

                <FiChevronDown className="hidden text-sm text-slate-700 sm:block" />
              </button>
            </Dropdown>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;