import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState();
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

  ];

  const profileMenu = [
    {
      key: "dashboard",
      label: "My Dashboard",
      icon: <FiUser />,
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
    if (key === "dashboard") {
      if (user.role === "Admin") {
        navigate("/Admin-dashboard");
      } else if (user.role === "Doctor") {
        navigate("/Doctor-dashboard");
      } else if (user.role === "Patient") {
        navigate("/Patient-dashboard");
      }
    }

    if (key === "logout") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setUser(null);

      navigate("/login");
    }
  };

 useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);

    setUser(parsedUser);

    console.log(parsedUser);
  }
}, []);

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


        <nav className="hidden flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7 ">

          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item.path)}
              className="whitespace-nowrap text-sm font-medium text-slate-800 transition hover:text-[#087D80] 2xl:text-base hover:cursor-pointer"
            >
              {item.label}
            </button>
          ))}

        </nav>


        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">


          <button
            type="button"
            onClick={() => navigate("/appointment")}
            className="flex items-center gap-2 rounded-xl bg-[#087D80] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06676A] sm:px-4 sm:text-base"
          >
            <FiCalendar className="text-base sm:text-lg" />

            <span className="hidden md:inline hover:cursor-pointer">
              Book Appointment
            </span>

            <span className="md:hidden">
              Book
            </span>
          </button>


          {!user && (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 rounded-xl border border-[#087D80] px-3 py-2.5 text-sm font-semibold text-[#087D80]"
            >
              <FiLogIn />

              <span className="hidden sm:inline">
                Login
              </span>
            </button>
          )}


          {user && (
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
                className="flex items-center gap-2"
              >
                <Avatar
                  size={42}
                  icon={<FiUser />}
                />

                <span className="hidden sm:block">
                  {user.fullName}
                </span>

                <FiChevronDown />
              </button>
            </Dropdown>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;