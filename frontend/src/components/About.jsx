import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-10">
          <div className="grid mx-auto lg:grid-cols-2 gap-12 items-center">
            <div className=" mt-4 hidden md:block md:mt-0 animate__animated animate__fadeInRight">
              <div className="relative">
                <div className="absolute max-w-125 mx-auto -inset-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <div className="relative max-w-120 bg-neutral-800 mx-auto p-6 rounded-lg shadow-xl">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-8 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-6 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-6 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-12 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-8 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-4 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-12 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-4 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-8 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-12 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-6 bg-neutral-700 h-8 rounded animate-pulse"></div>
                        <div className="col-span-6 bg-neutral-700 h-8 rounded animate-pulse"></div>

                    </div>
                </div>
              </div>
            </div>
            <div className="animate__animated max-w-2xl mx-auto animate__fadeInRight">
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <p className="text-gray-300 mb-6">
            With over 5 years of experience in full-stack development, I specialize in creating robust and scalable web applications. My passion lies in transforming complex problems into simple, elegant solutions.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-semibold mb-2">Experience</h4>
                <p className="text-gray-400">5+ Years</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-semibold mb-2">Projects</h4>
                <p className="text-gray-400">20+ Years</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-semibold mb-2">Clients</h4>
                <p className="text-gray-400">5+</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-semibold mb-2">Support</h4>
                <p className="text-gray-400">24/7 Available</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 bg-neutral-700 rounded-full text-gray-300">JavaScript</div>
            <div className="px-4 py-2 bg-neutral-700 rounded-full text-gray-300">JavaScript</div>
            <div className="px-4 py-2 bg-neutral-700 rounded-full text-gray-300">JavaScript</div>
            <div className="px-4 py-2 bg-neutral-700 rounded-full text-gray-300">JavaScript</div>
            <div className="px-4 py-2 bg-neutral-700 rounded-full text-gray-300">JavaScript</div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-blue-900 text-white rounded-lg transition-colors">Let's Talk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
