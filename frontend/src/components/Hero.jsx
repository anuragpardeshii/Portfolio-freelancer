import React from "react";

export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-black min-h-[100vh]">
        <div className="max-w-7xl flex-wrap mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around py-30">
          <div className="lg:w-1/2 lg:text-left md:max-w-4xl text-center md:text-center animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Create Your Professional Resume in Minutes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stand out from the crowd with a professionally designed resume.
              Easy to use, customizable templates that help you land your dream
              job.
            </p>
            <div className="space-x-4">
              <a
                href=""
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300 transform hover:scale-105"
              >
                Hire me
              </a>
              <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Download Resume
              </div>
            </button>
            </div>
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/08/19/66/31/360_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg" className=" rounded-full w-96 m-8 p-8 h-96" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
