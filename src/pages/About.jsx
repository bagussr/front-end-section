import React from "react";
import SectionLogo from "../images/section-logo.png";

const About = () => {
  return (
    <div className="animate-fade-in-down">
      {/* wrapper */}
      <div className="flex md:flex-row flex-col items-center justify-center lg:px-40 px-10  md:py-0 mx-auto h-screen">
        {/* logo */}
        <div className="flex justify-center items-center flex-1">
          <img src={SectionLogo} className="lg:w-64 md:w-48 w-20" alt="logo" />
        </div>

        {/* text */}
        <div className="flex flex-col gap-3 flex-1  ">
          <h1 className="lg:text-4xl text-2xl font-bold text-white  ">Tentang Kami</h1>
          <p className="text-base leading-7 tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices. 
          </p>

          {/* CTA */}
          <div className="flex w-full md:flex-row flex-col gap-3 my-5">
            <button className="bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 text-white rounded-lg drop-shadow-[0_1px_10px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500">
              Kontak Kami
            </button>
            <button className=" border border-[#5334B1] shadow-lg px-5 py-3 hover:drop-shadow-[0_35px_35px_#ffffff3f] rounded-lg transition duration-500">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
