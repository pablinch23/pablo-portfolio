"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import FadeInComponent from "./Animations/FadeInComponent";

export default function FeatureAwards() {
  return (
    <FadeInComponent>
      <main className="relative md:mx-8 mt-4 border-dashed border-t-2 border-gray-100/15">
        <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 px-2 py-1 rounded-xl shadow-lg shadow-gray-700">
          Feature Awards
        </h2>

        <div className="mt-20">
          <HeroParallax products={products} />
        </div>
      </main>
    </FadeInComponent>
  );
}
export const products = [
  {
    id: 1,
    title: "Hackathon TalentLand 2024",
    link: "https://hackathon.genius-arena.com/hackathon/como-crear-un-sistema-de-informacion-de-valor-para-las-microempresas-fundacion-coppel/",
    thumbnail: "/award.jpg",
  },
  {
    id: 2,
    title: "Hackathon TalentLand 2024",
    link: "https://hackathon.genius-arena.com/hackathon/como-crear-un-sistema-de-informacion-de-valor-para-las-microempresas-fundacion-coppel/",
    thumbnail: "/award-4.jpeg",
  },
  {
    id: 3,
    title: "Hackathon TalentLand 2024",
    link: "https://hackathon.genius-arena.com/hackathon/como-crear-un-sistema-de-informacion-de-valor-para-las-microempresas-fundacion-coppel/",
    thumbnail: "/award-1.jpeg",
  },
  {
    id: 4,
    title: "Gran Premio de Mexico - ICPC",
    link: "https://icpc.global/regionals/finder/mcapgp-2025",
    thumbnail: "/award-6.jpg",
  },
  {
    id: 5,
    title: "Hackathon TalentLand 2024",
    link: "https://hackathon.genius-arena.com/hackathon/como-crear-un-sistema-de-informacion-de-valor-para-las-microempresas-fundacion-coppel/",
    thumbnail: "/award-2.jpg",
  },

  {
    id: 6,
    title: "Hackathon TalentLand 2024",
    link: "https://hackathon.genius-arena.com/hackathon/como-crear-un-sistema-de-informacion-de-valor-para-las-microempresas-fundacion-coppel/",
    thumbnail: "/award-3.jpg",
  },

  {
    id: 7,
    title: "Gran Premio de Mexico - ICPC",
    link: "https://icpc.global/regionals/finder/mcapgp-2025",
    thumbnail: "/award-7.jpg",
  },
  {
    id: 8,
    title: "HackMexico 2024",
    link: "https://drive.google.com/file/d/1cN5GtCMEdm4hwUd1tBWJFAiMXy3gXmMi/view?usp=sharing",
    thumbnail: "/award-5.jpg",
  },
  {
    id: 9,
    title: "Gran Premio de Mexico - ICPC",
    link: "https://icpc.global/regionals/finder/mcapgp-2025",
    thumbnail: "/award-8.jpg",
  },
];
