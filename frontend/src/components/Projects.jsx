import React from "react";
import Bagiya from '/src/assets/Images/Bagiya.png';
import Clozt from '/src/assets/Images/clozt.png';
import Agentic from '/src/assets/Images/agentic.png';

const cardData = [
  {
    title: "Builtfast.ai",
    description: "Full-stack web application for medical professionals",
    link: "https://agentic-workflow.vercel.app/",
    image: Agentic,
    tags: ["Stackblitz", "Groq", "Netlify"],
  },
  {
    title: "Clozt",
    description: "Full-stack web application for medical professionals",
    link: "https://clozt.vercel.app/",
    image: Clozt,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Bagiya",
    description: "Full-stack web application to focus",
    link: "https://bagiya.vercel.app/",
    image: Bagiya,
    tags: ["React", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across different industries
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
              {/* Project Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover effect only for larger screens */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                    <span className="text-indigo-500 text-sm ml-2">
                      <a href={card.link} className="hover:underline">View</a>
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-4">{card.description}</p>
                  <div className="flex gap-2">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm bg-[#121212] text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Always visible details for mobile */}
              <div className="block md:hidden bg-neutral-800 p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                  {card.link && (
                    <span className="text-indigo-500 text-sm ml-2">
                      <a href={card.link} className="hover:underline">Live View</a>
                    </span>
                  )}
                </h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <div className="flex gap-2">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm bg-[#121212] text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              <p className="inline-flex items-center">
                View All Projects &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}