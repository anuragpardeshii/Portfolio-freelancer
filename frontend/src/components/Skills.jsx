import React from "react";
import HTML from "/src/assets/svg/html.svg";
import CSS from "/src/assets/svg/css.svg";
import JavaScript from "/src/assets/svg/js.svg";
import Bootstrap from "/src/assets/svg/bootstrap.svg";
import MongoDB from "/src/assets/svg/mongodb.svg";
import SQL from "/src/assets/svg/sql.svg";
import Express from "/src/assets/svg/express.svg";
import ReactImg from "/src/assets/svg/react.svg";
import Node from "/src/assets/svg/node-js.svg";
import Redux from "/src/assets/svg/redux.svg";
import Tailwind from "/src/assets/svg/tailwind.svg";
import Java from "/src/assets/svg/java.svg";

const data = [
  {
    src: HTML,
    tag: "HTML",
  },
  {
    src: CSS,
    tag: "CSS",
  },
  {
    src: JavaScript,
    tag: "JavaScript",
  },
  {
    src: Bootstrap,
    tag: "Bootstrap",
  },
  {
    src: MongoDB,
    tag: "MongoDB",
  },
  {
    src: SQL,
    tag: "SQL",
  },
  {
    src: Express,
    tag: "ExpressJS",
  },
  {
    src: ReactImg,
    tag: "ReactJS",
  },
  {
    src: Redux,
    tag: "Redux",
  },
  {
    src: Node,
    tag: "NodeJS",
  },
  {
    src: Tailwind,
    tag: "TailwindCSS",
  },
  {
    src: Java,
    tag: "Java",
  },
];
export default function Skills() {
  return (
    <>
      <section id="experience" class="py-20 bg-[#121212]">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 class="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
              A track record of delivering innovative solutions across various
              industries
            </p>
            <div className=" max-w-6xl mx-auto flex gap-6 flex-wrap justify-center">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-[#121212] rounded-lg shadow dark:bg-zinc-900 shadow-2xl dark:border-gray-700 flex items-center justify-center flex-col sm:w-32 md:w-48 lg:w-46 lg:h-46"
                >
                  <img
                    src={item.src}
                    alt={item.tag}
                    className="w-16 sm:w-26 md:w-24 lg:w-20"
                  />
                  <h5 className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-normal tracking-tight dark:text-gray-400">
                    {item.tag}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
