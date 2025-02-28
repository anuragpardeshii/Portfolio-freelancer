import React from "react";
import profile from "/src/assets/Images/img.jpg";
import Resume from "/src/assets/files/Anurag-Pardeshi-Resume.pdf";

export default function Hero() {
  return (
    <>
      <section id="home" className="bg-black min-h-[100vh]">
        <div className="max-w-7xl flex-wrap mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around py-30">
          <div className="lg:w-1/2 lg:text-left md:max-w-4xl text-center md:text-center animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get a Professional Website for Your Business!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stand out online with a stunning, custom-built website. Fully
              responsive, tailored to your needs, and designed to help you grow
              your business effortlessly.
            </p>
            <div className="space-x-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300 transform hover:scale-105"
              >
                Hire me
              </a>
              <button
                className="p-[3px] relative"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = { Resume }; // Replace with the correct file path
                  link.download = "Anurag-Pardeshi-Resume.pdf"; // Set the downloaded file name
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Download Resume
                </div>
              </button>
            </div>
          </div>
          <div>
            <img
              src={profile}
              className="rounded-full w-64 h-64 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 m-4 sm:m-6 md:m-8 p-4 sm:p-6 md:p-8"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
