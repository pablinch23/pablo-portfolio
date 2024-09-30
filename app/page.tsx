"use client";

import Letters from "../components/Letters";
import ProfileData from "../components/ProfileData";
import ImageProfile from "../components/ImageProfile";
import TextGenerate from "../components/TextGenerateEffect";
import FeatureProjects from "@/components/FeatureProjects";
import FeatureAwards from "@/components/FeatureAwards";
import Technologies from "@/components/Technologies";
import FadeInComponent from "@/components/Animations/FadeInComponent";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="absolute top-0 z-[-2] h-max max-w-full bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#0f0721,rgba(255,255,255,0))]">
      <section className="relative hidden lg:block">
        <Letters />
      </section>

      <section className="min-h-screen flex justify-center items-center  md:w-full">
        <div className="w-11/12">
          <div className=" md:mt:0 flex flex-col lg:flex-row h-full justify-center items-center space-x-0 lg:space-x-10 space-y-8 lg:space-y-0">
            <ProfileData />
            <ImageProfile />
          </div>
          <div className="hidden md:block">
            <div className=" text-center mt-8 md:mt-20 ">
              <TextGenerate
                text={`"Si puedes imaginarlo puedes programarlo."`}
              />
            </div>
            <div className="text-center items-center space-x-1">
              <TextGenerate text={"- Programación ATS."} />
            </div>
            <FadeInComponent>
              <div className="flex justify-center mt-6">
                <a
                  className="relative h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300 hidden md:inline-flex"
                  href="/Olguin_Resume.pdf"
                  target="_blank">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    <DownloadIcon className="w-6 h-6 animate-bounce " />
                    Resume
                  </span>
                </a>
              </div>
            </FadeInComponent>
          </div>
        </div>
      </section>

      <section className="mb-20 md:hidden">
        <div className=" text-center mt-8 md:mt-20">
          <TextGenerate text={`"Si puedes imaginarlo puedes programarlo."`} />
        </div>
        <div className="text-center items-center space-x-1">
          <TextGenerate text={"- Programación ATS."} />
        </div>
        <FadeInComponent>
          <div className="flex justify-center mt-6 ">
            <a
              className="relative h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300 md:hidden "
              href="/Olguin_Resume.pdf"
              target="_blank">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                <DownloadIcon className="w-6 h-6 animate-bounce " />
                Resume
              </span>
            </a>
          </div>
        </FadeInComponent>
      </section>

      <section>
        <FeatureProjects />
      </section>

      <section>
        <FeatureAwards />
      </section>

      <section>
        <Technologies />
      </section>

      <Footer />
    </main>
  );
}
