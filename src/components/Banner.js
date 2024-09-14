import React from "react";
import profile from '../img/img_profile.jpg';
import Resume from '../img/PONGS_resume.pdf';
const Banner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-10 py-16 text-center grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-[#F69C00] text-3xl font-semibold">Hi, I'm</h1>
          <h2 className="text-white text-4xl font-bold mt-2">Soryapongs Than</h2>
          <p className="text-gray-300 mt-4">IT Engineering Student</p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-white hover:text-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png"
                alt="Telegram"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a href="https://web.facebook.com/konsva.jounoir" className="text-white hover:text-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="md:pt-8 pt-[10px] hidden md:block">
            <button className="bg-[#070707] text-[#EBDDDD] font-semibold px-10 py-2 rounded-tl-[40px] rounded-br-[40px] shadow-lg hover:text-[#106B92]">
              <a target="blank" href={Resume}>Resume</a>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="">
          <img
            src={profile} // replace with your image URL
            alt="Soryapongs Than"
            className="rounded-tl-[67px] rounded-br-[67px] w-48 mx-auto md:w-[300px] md:h-auto"
          />
          <div className="mt-6 md:block hidden">
            <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-lg hover:text-[#F69C00]">
              <a href="#contact">Let's connect</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
