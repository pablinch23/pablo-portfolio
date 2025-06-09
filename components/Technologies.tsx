"use client";
import React from "react";
import FadeInComponent from "./Animations/FadeInComponent";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "c",
  "c++",
  "python"
];

export default function Technologies() {
  return (
    <FadeInComponent>
      <main className="relative border-dashed border-t-2 border-gray-100/15">
        <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 px-2 py-1 rounded-xl shadow-lg shadow-gray-700">
          Technologies
        </h2>

        <div className="mx-4 md:mx-12 flex justify-center my-20">
          <div className="p-4 shadow-lg shadow-gray-200 bg-white rounded-full">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </main>
    </FadeInComponent>
  );
}
