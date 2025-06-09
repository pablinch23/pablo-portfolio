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
    title: "Seminario Microelectronica INAOE 2024",
    link: "https://www-elec.inaoep.mx/~SEA/2024/",
    thumbnail: "/award.jpg",
  },
  {
    id: 2,
    title: "Cursos Idiomas CENLEX Zacatenco",
    link: "https://www.ipn.mx/cenlexz/",
    thumbnail: "/award-4.jpeg",
  },
  {
    id: 3,
    title: "Curso de Verano Centro Nacional de Micro y Nano Tecnología",
    link: "https://www.ipn.mx/nanocentro/",
    thumbnail: "/award-1.jpg",
  },
  {
    id: 4,
    title: "Recorrido por Cuarto Limpio",
    link: "https://www.ipn.mx/nanocentro/",
    thumbnail: "/award-6.jpg",
  },
];
