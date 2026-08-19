import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import {
  FiHeart,
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Hospitals",
      path: "/hospitals",
    },
    {
      label: "Doctors",
      path: "/doctors",
    },
    {
      label: "Treatments",
      path: "/treatments",
    },
    
  ];

  const patientLinks = [
    {
      label: "Book Appointment",
      path: "/book-appointment",
    },
    {
      label: "My Appointments",
      path: "/appointments",
    },
    {
      label: "My Requests",
      path: "/requests",
    },
    {
      label: "My Profile",
      path: "/profile",
    },
    {
      label: "FAQs",
      path: "/faq",
    },
  ];

  return (
    <footer className="bg-[#064B50] text-white">

      
      <div className="mx-auto max-w-375 px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

       
          <div className="sm:col-span-2 lg:col-span-1">

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087D80]">
             <img src={logo} alt="logo" className='h-12 w-18 rounded-full' />
              </div>

              <span className="text-2xl font-bold tracking-wide">
                MEDTOUR
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 sm:text-base">
              Your trusted platform for discovering hospitals,
              doctors and treatments, and managing your complete
              healthcare journey.
            </p>

           
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#064B50]"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#064B50]"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#064B50]"
              >
                <FiTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#064B50]"
              >
                <FiLinkedin />
              </a>

            </div>
          </div>

     
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white sm:text-base"
                  >
                    <FiArrowRight className="text-xs" />
                    {link.label}
                  </button>
                </li>
              ))}

            </ul>
          </div>

      
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Patient Care
            </h3>

            <ul className="space-y-3">

              {patientLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white sm:text-base"
                  >
                    <FiArrowRight className="text-xs" />
                    {link.label}
                  </button>
                </li>
              ))}

            </ul>
          </div>

       
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-lg text-[#6EDAD2]" />

                <p className="text-sm leading-6 text-white/70 sm:text-base">
                  New Delhi, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-lg text-[#6EDAD2]" />

                <a
                  href="tel:+911234567890"
                  className="text-sm text-white/70 transition hover:text-white sm:text-base"
                >
                  +91 12345 67890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="shrink-0 text-lg text-[#6EDAD2]" />

                <a
                  href="mailto:support@medtour.com"
                  className="break-all text-sm text-white/70 transition hover:text-white sm:text-base"
                >
                  support@medtour.com
                </a>
              </div>

            </div>

        
            <button
              type="button"
              onClick={() => navigate("/appointment")}
              className="mt-6 flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#064B50] transition hover:bg-[#E8FFFC] hover:cursor-pointer"
            >
              Book Appointment
              <FiArrowRight />
            </button>

          </div>

        </div>
      </div>

  
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-375 flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p className="text-center text-xs text-white/60 md:text-left sm:text-sm">
            © {new Date().getFullYear()} MEDTOUR. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">

            <button
              type="button"
              onClick={() => navigate("/privacy")}
              className="text-xs text-white/60 transition hover:text-white sm:text-sm"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => navigate("/terms")}
              className="text-xs text-white/60 transition hover:text-white sm:text-sm"
            >
              Terms & Conditions
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;