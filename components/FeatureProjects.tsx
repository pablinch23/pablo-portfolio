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
              title="DevInterview"
              image="devinterview.png"
              technologies={[
                { name: "React", icon: ReactIcon },
                { name: "TailwindCss", icon: TailwindIcon },
              ]}
              description="Platform that allows you to practice technical interviews to enhance your skills and get a job in the tech industry."
              contributors={[
                {
                  name: "mvnueloc",
                  link: "https://github.com/mvnueloc",
                  avatar:
                    "https://avatars.githubusercontent.com/u/128934926?v=4",
                },
                {
                  name: "danielctecla",
                  link: "https://github.com/danielctecla",
                  avatar:
                    "https://avatars.githubusercontent.com/u/94944243?v=4",
                },
                {
                  name: "Antxnszn",
                  link: "https://github.com/Antxnszn",
                  avatar:
                    "https://avatars.githubusercontent.com/u/147531709?v=4",
                },
              ]}
              source="https://github.com/mvnueloc/DevInterview"
              preview="https://devinterview.vercel.app"
            />
          </FadeInLeft>

          <FadeInRight>
            <CardProject
              title="Filters PDI"
              image="filterspdi.png"
              technologies={[
                { name: "HTML", icon: HtmlIcon },
                { name: "CSS", icon: CssIcon },
                { name: "JavaScript", icon: JsIcon },
              ]}
              description="Web application that allows you to apply the most common filters in image processing, like binarization, grayscale, sobel, etc."
              contributors={[
                {
                  name: "mvnueloc",
                  link: "https://github.com/mvnueloc",
                  avatar:
                    "https://avatars.githubusercontent.com/u/128934926?v=4",
                },
              ]}
              source="https://github.com/mvnueloc/FiltersJs_PDI"
              preview="https://filters-pdi.netlify.app"
            />
          </FadeInRight>

          <FadeInLeft>
            <CardProject
              title="Conexion Emprendedora"
              image="conexion-emprendedora.png"
              technologies={[
                { name: "React", icon: ReactIcon },
                { name: "TailwindCss", icon: TailwindIcon },
              ]}
              description="Minimum viable product that allows entrepreneurs to know more about their finances, sales and customers."
              contributors={[
                {
                  name: "mvnueloc",
                  link: "https://github.com/mvnueloc",
                  avatar:
                    "https://avatars.githubusercontent.com/u/128934926?v=4",
                },
                {
                  name: "danielctecla",
                  link: "https://github.com/danielctecla",
                  avatar:
                    "https://avatars.githubusercontent.com/u/94944243?v=4",
                },
                {
                  name: "harielPS",
                  link: "https://github.com/HarielPS",
                  avatar:
                    "https://avatars.githubusercontent.com/u/163700357?v=4",
                },
                {
                  name: "charlyguz",
                  link: "https://github.com/charlyguz",
                  avatar:
                    "https://avatars.githubusercontent.com/u/83683712?v=4",
                },
              ]}
              source="https://github.com/charlyguz/ConexionEmprendedora"
              preview="https://conexionemprendedora.z13.web.core.windows.net"
            />
          </FadeInLeft>

          <FadeInRight>
            <CardProject
              title="Music Recommendation System"
              image="music-system-recommendation.png"
              technologies={[
                { name: "Python", icon: PythonIcon },
                { name: "Pandas", icon: PandasIcon },
                { name: "Scikitlearn", icon: ScikitIcon },
              ]}
              description="Music recommendation program based on the metadata of the songs.  Uses the unsupervised learning algorithm to group and classify songs."
              contributors={[
                {
                  name: "mvnueloc",
                  link: "https://github.com/mvnueloc",
                  avatar:
                    "https://avatars.githubusercontent.com/u/128934926?v=4",
                },
                {
                  name: "danielctecla",
                  link: "https://github.com/danielctecla",
                  avatar:
                    "https://avatars.githubusercontent.com/u/94944243?v=4",
                },
              ]}
              source="https://github.com/mvnueloc/Music_Recommendation_System"
            />
          </FadeInRight>
        </section>
      </main>
    </FadeInComponent>
  );
};

export default FeatureProjects;
