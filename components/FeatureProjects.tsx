"use client";

import React from "react";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import CardProject from "./CardProject";
import FadeInLeft from "./Animations/FadeInLeft";
import FadeInRight from "./Animations/FadeInRight";
import FadeInComponent from "./Animations/FadeInComponent";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import JsIcon from "./icons/JsIcon";
import PythonIcon from "./icons/PythonIcon";
import PandasIcon from "./icons/PandasIcon";
import ScikitIcon from "./icons/ScikitIcon";
import CPP from "./icons/CPP";
import CIcono from "./icons/C";

const FeatureProjects = () => {
  return (
    <FadeInComponent>
      <main className="relative mt-4 mb-24 border-dashed border-t-2 border-gray-100/15 ">
        <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 px-2 py-1 rounded-xl shadow-lg shadow-gray-700">
          Feature Proyects
        </h2>

        <section className="w-full flex flex-col items-center justify-center overflow-hidden">
          <FadeInLeft>
            <CardProject
              title="Research"
              image="latex.jpg"
              technologies={[
                { name: "CPP", icon: CPP },
              ]}
              description="Document showing various cybersecurity investigations."
              contributors={[
                {
                  name: "pablinch23",
                  link: "https://github.com/pablinch23",
                  avatar:
                    "https://avatars.githubusercontent.com/u/140679235?s=400&u=18efccb407e3cd93c9889f11982773ab64a9ac82&v=4",
                },
              ]}
              source="https://github.com/pablinch23/Investigaciones"
              preview="https://github.com/pablinch23/Investigaciones"
            />
          </FadeInLeft>

          <FadeInRight>
            <CardProject
              title="Board C and C++"
              image="cycpp.jpeg"
              technologies={[
                { name: "C", icon: CIcono },
              ]}
              description="C and C++ codes as a way to develop a whiteboard for learning programming.."
              contributors={[
                {
                  name: "pablinch23",
                  link: "https://github.com/pablinch23",
                  avatar:
                    "https://avatars.githubusercontent.com/u/140679235?s=400&u=18efccb407e3cd93c9889f11982773ab64a9ac82&v=4",
                },
              ]}
              source="https://github.com/pablinch23/codigos-en-C-y-Cplusplus"
              preview="https://github.com/pablinch23/codigos-en-C-y-Cplusplus"
            />
          </FadeInRight>

         
        </section>
      </main>
    </FadeInComponent>
  );
};

export default FeatureProjects;
