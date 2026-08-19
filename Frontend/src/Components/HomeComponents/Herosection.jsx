import React from 'react'
import Features from "./Features";
import heroImage from "../../assets/images.jpg";

const Herosection = () => {
  return (
    <section className="overflow-hidden bg-white   border-b border-slate-200">
      <div className="mx-auto grid max-w-615 grid-cols-1 items-center px-6 py-10 lg:grid-cols-2">

        {/* Left Content */}
        <div className="relative px-6 z-20 py-8">

          <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-2px] text-slate-950 sm:text-[48px] lg:text-[58px]">
            Your Journey to
            <br />
            Better{" "}
            <span className="text-[#0f8b7d]">
              Health in India
            </span>
          </h1>

          <p className="mt-5 max-w-162.5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover world-class hospitals, expert doctors and
            <br className="hidden sm:block" />
            affordable treatments in India.
          </p>

          <Features />

        </div>

        {/* Right Image */}
        <div className="relative z-10  hidden h-130 lg:block">

          <div className="absolute insert-y-0 right-0  w-full overflow-hidden rounded-[45%]">
            <img
              src={heroImage}
              alt="Doctor consulting patient"
              className="h-full w-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
};


export default Herosection
